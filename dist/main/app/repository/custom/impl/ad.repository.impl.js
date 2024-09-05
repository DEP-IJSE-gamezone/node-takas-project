export class AdRepositoryImpl {
    connection;
    constructor(connection) {
        this.connection = connection;
    }
    async count() {
        const { rowCount } = await this.connection.query('SELECT * FROM ad');
        return rowCount;
    }
    async save(ad) {
        const { rows } = await this.connection.query('INSERT INTO ad (title, description, posted_date, user_email) VALUES ($1, $2, $3, $4)', [ad.title, ad.description, ad.postedDate, ad.userEmail]);
        ad = rows[0];
        return ad.id;
    }
    async update(ad) {
        await this.connection.query('UPDATE "ad" SET title=$1, description=$2, posted_date=$3, user_email=$4 WHERE id=$5', [ad.title, ad.description, ad.postedDate, ad.userEmail, ad.id]);
    }
    async deleteById(adId) {
        await this.connection.query('DELETE FROM "ad" WHERE id = $1', [adId]);
    }
    async findById(adId) {
        const { rows: [ad] } = await this.connection.query('SELECT * FROM "ad" WHERE id = $1', [adId]);
        return ad;
    }
    async findAll() {
        const { rows } = await this.connection.query('SELECT * FROM "ad"');
        return rows;
    }
    async existsById(adId) {
        return (!!(await this.findById(adId)));
    }
}
//# sourceMappingURL=ad.repository.impl.js.map