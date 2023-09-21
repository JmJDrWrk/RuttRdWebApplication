import customAPI from "./customAPI";
export default class UserApi extends customAPI {
    constructor(config) {
        alert('DEPRECATED')
        super();
        if (config) {
            Object.assign(this, { ...config });
        }
        this.relPath = '/users'
    }
    async signUp(obj) {
        alert('DEPRECATED')
        await this.doPost('/users/upload/rutt', obj)
    }
    async logIn(obj) {
        alert('DEPRECATED')
        await super.doPost('/users/login', obj)
    }
    async getMe(obj) {
        alert('DEPRECATED')
        await this.doGet('/users/me', obj)
    }
}
