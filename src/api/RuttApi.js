import ApiRequest from "./ApiRequest";
import ResponseHandler from "./ResponseHandler";
import customAPI from "./customAPI";
export default class RuttApi extends ApiRequest {
    constructor(config) {
        super();
        if (config) {
            Object.assign(this, { ...config });
        }
        this.relPath = '/rutts'
    }
    async uploadRutt(obj) {
        const response = await this.post('/migration/upload', obj)
        ResponseHandler.handle(response)
        return response
    }
    async publishRutt(ruttId) {
        return await this.get('/publish/'+ruttId)
    }
    async updateRutt(rutt, ruttId) {
        return ResponseHandler.handle(await this.post('/migration/update/rutt/by-id/'+ruttId, rutt))
    }
    async findById(ruttId) {
        return (await this.get('/migration/rutt/by-id/'+ruttId)).data.response
    }
    async findByOthersId(ruttId) {
        return (await this.get('/rutt/other/'+ruttId)).data.rutt
    }
    async findMyRutts() {
        return (await this.get('/myrutts'))
    }
    async findOthersRuttsByEmail(email) {
        // return (await this.get(`/by-email?email=${email}`)).data
        return (await this.get(`/migration/by-email/${email}`)).data.response
    }
    async deleteById(ruttId) {
        return (await this.get(`/delete/${ruttId}`))
    }
}
