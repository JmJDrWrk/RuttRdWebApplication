import customAPI from "./customAPI";
export default class RuttApi extends customAPI {
    constructor(config) {
        super();
        if (config) {
            Object.assign(this, { ...config });
        }
        this.relPath = '/rutt'
    }
    async uploadRutt(obj) {
        await this.doPost('/upload', {
            rutt : obj
        })
    }
    async publishRutt(obj) {
        await this.get('/publish')
    }
    async updateRutt(obj) {
        await this.doPost('/update', obj)
    }
}
