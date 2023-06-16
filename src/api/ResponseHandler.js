export default class ResponseHandler {
    static isSuccess(response) {
        if(!response.ok){
            console.log('Failed request!')
            return false
        }
        return true
    }

    static async getNotificationModel(data) {
        console.log('data: ' + JSON.stringify(data))
        if(this.isSuccess(data)){
            console.log("success")
            data.type = 'sucess'
        }else{
            data.type = 'error'
        }

        if(!data.message){
            data.message = 'Unknown error'
        }
        if(!data.title){
            data.title = data.message
        }
        
        return data
    }

    static handle(response, onSuccess, onError) {
        console.log("RES: ", response)
        const notification = this.getNotificationModel(response)
        alert(notification.title)
    }
}

