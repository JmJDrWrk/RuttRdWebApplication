import ApiRequest from "./ApiRequest"
import State from "./state"
export default class API_community extends ApiRequest{
  constructor() {
    super()
    this.relPath = '/community'
  }
  async createCommunity(communityData) {
    const res = await this.post('/create', communityData)
    return res.data
  }

  async getCommunityByName(communityName) {
    const res = await this.get(`/byname/${communityName}`)
    return res.data
  }

  async getCommunityById(communityId) {
    const res = await this.get(`/${communityId}`)
    return res.data
  }

  async getContentById(contentId) {
    const res = await this.get(`/content/${contentId}`)
    return res.data
  }

  async createCommunityContentByCommunityName(communityName, contentData) {
    const res = await this.call('POST',`/content/create/by-name/${communityName}`, contentData)
    return res.data
  }

  async getMyCommunities() {
    return (await this.get('/my/communities')).data
  }
}