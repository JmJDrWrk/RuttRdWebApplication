import ServerApi from "./api"
import State from "./state"
export default class PublishAPI {
    
    static async getPublishById(id) {
        const res = await ServerApi.doGet('/users/asdasd')
        if(!res.error){
          console.log('res: '+JSON.stringify(res))
        //   State.setOther(res)
          new Error('Cant obtain profile data!')
        }
        return res
    }
}