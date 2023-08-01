import ServerApi from "./api"
import State from "./state"
export default class ProfileAPI {

  static async getProfileByEmail(email) {
    console.error('DEPRECATED')
    const res = await ServerApi.doGet('/users/public/profile/' + email)
    if (!res.error) {
      console.log('res: ' + JSON.stringify(res))
      State.setOther(res)
      new Error('Cant obtain profiles data!')
    }
    return res
  }
  static async getProfilesIncluding(key) {
    console.error('DEPRECATED')
    const res = await ServerApi.doGet('/users/public/profiles')
    if (!res.error) {
      console.log('res: ' + JSON.stringify(res))
      State.setOther(res)
      new Error('Cant obtain profile data!')
    }
    return res
  }

  static async uploadPhoto(data){
    console.error('DEPRECATED')
    if (!res.error) {
      console.log('res: ' + JSON.stringify(res))
      State.setOther(res)
      new Error('Cant upload file!')
    } 
    return res
  }
}