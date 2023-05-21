import customAPI from "./customAPI";
export default class RuttApi extends customAPI {
    constructor(config) {
        super();
        if (config) {
            Object.assign(this, { ...config });
        }
    }
    async uploadRutt(obj) {
        await this.doPost('/users/upload/rutt', obj)
    }
    async uploadRutt(obj) {
        await this.doPost('/users/publish/rutt', obj)
    }
    async updateRutt(obj) {
        await this.doPost('/users/update/rutt', obj)
    }
}
