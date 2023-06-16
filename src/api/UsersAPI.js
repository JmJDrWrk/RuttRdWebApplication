import ApiRequest from "./ApiRequest";
import ResponseHandler from "./ResponseHandler";

export default class UsersAPI extends ApiRequest {
    constructor() {
        super();
        this.relPath = '/users';
    }

    async login(formData) {
        const responseData = await super.post('/users', formData)
        ResponseHandler.handle(responseData)
    }
}
