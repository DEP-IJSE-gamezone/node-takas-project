export class ErrorTo {
    status;
    title;
    detail;
    instance;
    error;
    type = "about:blank";
    constructor(status, title, detail, instance, error) {
        this.status = status;
        this.title = title;
        this.detail = detail;
        this.instance = instance;
        this.error = error;
    }
}
//# sourceMappingURL=error.to.js.map