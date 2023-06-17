import ApiRequest from "./ApiRequest";
import ResponseHandler from "./ResponseHandler";
import State from "./state";

export default class UsersAPI extends ApiRequest {
    constructor() {
        super();
        this.relPath = '/users';
    }

    async login(formData) {
        return ResponseHandler.handle(await super.post('/login', formData), (data) => {
            //OnSuccess
            State.setToken(data.token)
        })
    }

    async signup(formData) {
        return ResponseHandler.handle(await super.post('/signin', formData))
    }

    async getMe() {
        return await super.get('/me', formData)
    }
}
