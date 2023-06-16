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
                console.log(`posting to ${this.getFormedUrl(path)}`);
                fetch(this.getFormedUrl(path), {
                    method: 'POST',
                    headers: this.getHeaders(), // Fixed: Added "this" keyword
                    body: JSON.stringify(obj) // Fixed: Changed "jbody" to "obj"
                })
                .then(response => response.json())
                .then(data => resolve(data));
            } catch (err) {
                console.log('[SERVERAPI][DOPOST]  ', err);
                reject(`POST ERROR ${err}`);
            }
        });
        return promise;
    }


}
