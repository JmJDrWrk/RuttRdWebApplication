import ServerApi from "./api"
import State from "./state"
export default class ProfileAPI {
    
    static async getProfileByEmail(email) {
        const res = await ServerApi.doGet('/users/me')
        if(!res.error){
          console.log('res: '+JSON.stringify(res))
          State.setOther(res)
          new Error('Cant obtain profile data!')
        }
        return res
    }
}