export default class ResponseHandler {
    static isSuccess(response) {
        // console.log('response.ok: ' + response.ok)
        return response.ok
    }

    static async getNotificationModel(data) {
        if(!data.message){
            data.message = 'Unknown error'
        }
        if(!data.title){
            data.title = data.message
        }
        
        return data
    }

    static defaultOnSuccess(res) {
        console.log('[ResponseHandler] ' + JSON.stringify(res))
    }

    static defaultOnError(res) {
        console.error('[ResponseHandlerError] ', res)
    }

    static async handle({data, succeeded}, onSuccess=this.defaultOnSuccess, onError=this.defaultOnError) {
        
        if(succeeded){
            onSuccess(data)
        }else{
            onError(data)
        }
        
        const notification = await this.getNotificationModel(data)
        console.log('[NOTIFICATION]', notification)
        return succeeded
        // alert(notification.title)
    }
    static handleResponse(response, onSuccess=this.defaultOnSuccess, onError=this.defaultOnError) {
        return this.isSuccess(response)
    } 
}

