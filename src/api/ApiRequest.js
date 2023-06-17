import ResponseHandler from "./ResponseHandler";
import State from "./state";

export default class ApiRequest{
    constructor() {
        this.relPath = '/default';
        this.URL = {
            base : 'https://ruttradarvalkiria.jmjdrwrk.repl.co'
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
                .then(([data, succeeded]) => resolve({ data, succeeded }));
            } catch (err) {
                console.log('[SERVERAPI][DOPOST]  ', err);
                reject(`POST ERROR ${err}`);
            }
        });
        return promise;
    }


}
