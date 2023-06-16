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
    }

    static handle(response, onSuccess, onError) {
        console.log("RES: ", response)
        if(this.isSuccess(response)){
            console.log("EXITO")
            // this.getNotificationModel(data)
        }
        this.getNotificationModel(data)

    }
}

