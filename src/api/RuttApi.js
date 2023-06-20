import ApiRequest from "./ApiRequest";
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
        const response = await this.post('/upload', {
            rutt : obj
        })
        ResponseHandler.handle(response)
        return response
    }
    async publishRutt(ruttId) {
        return await this.get('/publish/'+ruttId)
    }
    async updateRutt(rutt, ruttId) {
        return ResponseHandler(await this.post('/update', {
            rutt : rutt,
            ruttId : ruttId
        }))
    }
    async findById(ruttId) {
        return (await this.get('/rutt/'+ruttId)).data.rutt
    }
    async findMyRutts() {
        return (await this.get('/myrutts')).data
    }
    async findOthersRuttsByEmail(email) {
        return (await this.get(`/by-email?email=${email}`)).data
    }
}
