import ApiRequest from "./ApiRequest"
import ServerApi from "./api"
import State from "./state"
export default class ProfileAPI extends ApiRequest{
  constructor() {
    super()
    this.relPath = '/users'
  }
  async getProfileByEmail(email) {
    const res = await ServerApi.doGet('/users/public/profile/' + email)
    if (!res.error) {
      console.log('res: ' + JSON.stringify(res))
      State.setOther(res)
      new Error('Cant obtain profiles data!')
    }
    return res
  }
  async getProfilesIncluding(key) {
    const {data, succeeded} = await this.get('/public/profiles')
    if (!data.error) {
      console.log('res: ' + JSON.stringify(data))
      State.setOther(data)
      new Error('Cant obtain profile data!')
    }
    return data
  }

  // async uploadPhoto(data){
  //   if (!res.error) {
  //     console.log('res: ' + JSON.stringify(res))
  //     State.setOther(res)
  //     new Error('Cant upload file!')
  //   } 
  //   return res
  // }
}