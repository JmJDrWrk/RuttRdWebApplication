import ApiRequest from "./ApiRequest";
import ResponseHandler from "./ResponseHandler";

export default class ExploreApi extends ApiRequest {
    constructor(config) {
        super();
        if (config) {
            Object.assign(this, { ...config });
        }
        this.relPath = '/scrap'
    }
    // async uploadRutt(obj) {
    //     const response = await this.post('/upload', {
    //         rutt : obj
    //     })
    //     ResponseHandler.handle(response)
    //     return response
    // }
    // async publishRutt(ruttId) {
    //     return await this.get('/publish/'+ruttId)
    // }
    // async updateRutt(rutt, ruttId) {
    //     return ResponseHandler.handle(await this.post('/update', {
    //         rutt : rutt,
    //         ruttId : ruttId
    //     }))
    // }
    async findAllRuttsWithPhotos() {
        return (await this.get('/routes/hasPhotos')).data
    }
    async findRuttById(ruttId) {
        return (await this.get('/routes/detail/'+ruttId)).data
    }

}
