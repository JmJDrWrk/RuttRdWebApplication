import customAPI from "./customAPI";
export default class UserApi extends customAPI {
    constructor(config) {
        console.error('DEPRECATED')
        super();
        if (config) {
            Object.assign(this, { ...config });
        }
        this.relPath = '/users'
    }
    async signUp(obj) {
        console.error('DEPRECATED')
        await this.doPost('/users/upload/rutt', obj)
    }
    async logIn(obj) {
        console.error('DEPRECATED')
        await super.doPost('/users/login', obj)
    }
    async getMe(obj) {
        console.error('DEPRECATED')
        await this.doGet('/users/me', obj)
    }
}
