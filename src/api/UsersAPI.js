import ApiRequest from "./ApiRequest";
import ResponseHandler from "./ResponseHandler";
import State from "./state";

export default class UsersAPI extends ApiRequest {
    constructor() {
        super();
        this.relPath = '/users';
    }

    //static users = new UsersAPI() ?

    async login(formData) {
        // return ResponseHandler.handle(await super.post('/login', formData),
        return ResponseHandler.handle(await super.post('/migration/login', formData),
        (data) => {
            State.setToken(data.response.token)
        }
        ,(error) => {
            
        })
    }

    async signup(formData) {
        return ResponseHandler.handle(await super.post('/migration/signup', formData))
    }

    async getMe() {
        return await super.get('/migration/me')

    }
}
