import customAPI from "./customAPI";
export default class UserApi extends customAPI {
    constructor(config) {
        super();
        if (config) {
            Object.assign(this, { ...config });
        }
        this.relPath = '/users'
    }
    async signUp(obj) {
        await this.doPost('/users/upload/rutt', obj)
    }
    async logIn(obj) {
        await super.doPost('/users/login', obj)
    }
    async getMe(obj) {
        await this.doGet('/users/me', obj)
    }
}
