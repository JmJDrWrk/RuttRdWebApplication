import ResponseHandler from "./ResponseHandler";
import State from "./state";
import CONFIG from '../config.json'
export default class ApiRequest{
    constructor() {
        this.relPath = '/default';
        this.hasNotificationContext = false;
        this.URL = {
            base : `${CONFIG.BASEURL}`
        }
    }
    //To display a notification is necessary to pass from the component the context for the notification
    notificationContext(show) {
        if(show){
            this.hasNotificationContext = true;
            this.show = show;
            return this
        }
        console.error('[NotificationContext] show is undefined')
    }

    //Depends on the notification context to display it following a specific message structure from server
    handleResponse({data, succeeded}) {
        if(!this.hasNotificationContext){
            console.debug('[NotificationContext] skipping notification')
        }else{
            // console.log('handling response')
            this.show({
                message: data.message,
                success: 'success',
                error: 'error',
                succeeded: succeeded,
                lifetime: 100,
                spacing : 6
            });
        }

    }

    getHeaders() {
        let customHeaders = new Headers();
        customHeaders.append("Content-Type", "application/json");
        customHeaders.append("auth-token", State.getToken());
        return customHeaders;
    } 

    getFormedUrl(rUrl) {
        return `${this.URL.base}${this.relPath}${rUrl}`;
    }

    call(method='GET',path, obj) {
        let promise = new Promise((resolve, reject) => {
            try {
                fetch(this.getFormedUrl(path), {
                    method: method,
                    headers: this.getHeaders(), // Fixed: Added "this" keyword
                    body: JSON.stringify(obj) // Fixed: Changed "jbody" to "obj"
                })
                .then(response => {
                    const succeeded = ResponseHandler.handleResponse(response)
                    return Promise.all([response.json(), succeeded])
                })
                .then(([data, succeeded]) => {
                    this.handleResponse({data, succeeded})
                    resolve({ data, succeeded })
                });
            } catch (err) {
                console.log('[SERVERAPI][DOPOST]  ', err);
                reject(`POST ERROR ${err}`);
            }
        });
        return promise;
    }

    post(path, obj) {
        let promise = new Promise((resolve, reject) => {
            try {
                fetch(this.getFormedUrl(path), {
                    method: 'POST',
                    headers: this.getHeaders(), // Fixed: Added "this" keyword
                    body: JSON.stringify(obj) // Fixed: Changed "jbody" to "obj"
                })
                .then(response => {
                    const succeeded = ResponseHandler.handleResponse(response)
                    return Promise.all([response.json(), succeeded])
                })
                .then(([data, succeeded]) => {
                    this.handleResponse({data, succeeded})
                    resolve({ data, succeeded })
                });
            } catch (err) {
                console.log('[SERVERAPI][DOPOST]  ', err);
                reject(`POST ERROR ${err}`);
            }
        });
        return promise;
    }
    get(path, obj) {
        let promise = new Promise((resolve, reject) => {
            try {
                fetch(this.getFormedUrl(path), {
                    method: 'GET',
                    headers: this.getHeaders() // Fixed: Added "this" keyword
                })
                .then(response => {
                    const succeeded = ResponseHandler.handleResponse(response)
                    return Promise.all([response.json(), succeeded])
                })
                .then(([data, succeeded]) => {
                    this.handleResponse({data, succeeded})
                    resolve({ data, succeeded })
                });
            } catch (err) {
                console.log('[SERVERAPI][DOPOST]  ', err);
                reject(`POST ERROR ${err}`);
            }
        });
        return promise;
    }

}
