import ApiRequest from "./ApiRequest"
import ServerApi from "./api"
import State from "./state"
export default class ProfileAPI extends ApiRequest{
  constructor() {
    super()
    this.relPath = '/users'
  }
  async getProfileByEmail(email) {
    // const res = await ServerApi.doGet('/users/public/profile/' + email)
    const res = await this.get('/migration/user/detail/' + email)
    if (!res.error) {
      State.setOther(res.response)
      new Error('Cant obtain profiles data!')
    }
    return res.data.response
  }
  async getProfilesIncluding(key) {
    // const {data, succeeded} = await this.get('/public/profiles')
    const {data, succeeded} = await this.get('/migration/users')
    if (!data.error) {
      State.setOther(data)
      new Error('Cant obtain profile data!')
    }
    return data.response
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