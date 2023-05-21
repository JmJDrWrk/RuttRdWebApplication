import customAPI from "./customAPI";
export default class RuttApi extends customAPI {
    constructor(config) {
        super();
        if (config) {
            Object.assign(this, { ...config });
        }
        this.relPath = '/rutts'
    }
    async uploadRutt(obj) {
        return await this.doPost('/upload', {
            rutt : obj
        })
    }
    async publishRutt(ruttId) {
        return await this.get('/publish/'+ruttId)
    }
    async updateRutt(rutt, ruttId) {
        return await this.doPost('/update', {
            rutt : rutt,
            ruttId : ruttId
        })
    }
    async findById(ruttId) {
        return (await this.doGet('/rutt/'+ruttId)).rutt
    }
}
