export class ImageRepositoryImpl {
    connection;
    constructor(connection) {
        this.connection = connection;
    }
    async count() {
        const { rowCount } = await this.connection.query('SELECT * FROM image');
        return rowCount;
    }
    async save(image) {
        const { rows } = await this.connection.query('INSERT INTO image (ad_id, url) VALUES ($1, $2)', [image.adId, image.url]);
        image = rows[0];
        return image.imageId;
    }
    async update(image) {
        await this.connection.query('UPDATE "image" SET ad_id=$1, url=$2 WHERE image_id=$3', [image.adId, image.url, image.imageId]);
    }
    async deleteById(imageId) {
        await this.connection.query('DELETE FROM "image" WHERE image_id = $1', [imageId]);
    }
    async findById(imageId) {
        const { rows: [image] } = await this.connection.query('SELECT * FROM "image" WHERE image_id = $1', [imageId]);
        return image;
    }
    async findAll() {
        const { rows } = await this.connection.query('SELECT * FROM "image"');
        return rows;
    }
    async existsById(imageId) {
        return (!!(await this.findById(imageId)));
    }
}
//# sourceMappingURL=image.repository.impl.js.map