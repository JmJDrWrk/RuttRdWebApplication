import State from "./state";
import CONFIG from "../config.json"
export default class customAPI {
    constructor() {
        this.host = `${CONFIG.BASEURL}`;
    }
    test() 
    {
        console.log(`doPost ${this.host}${this.relPath}`)
        console.log('THIS IS THIS', JSON.stringify(this))
    }
    async doPost(rUrl, jbody) {
        //OverCall Protection
        var customHeaders = new Headers();
        customHeaders.append("Content-Type", "application/json");
        customHeaders.append("auth-token", State.getToken());

        let promise = new Promise((resolve, reject) => {
            try {
                console.log(`doPost ${this.host}${this.relPath}${rUrl}`)
                fetch(`${this.host}${this.relPath}${rUrl}`,
                    {
                        method: 'POST',
                        headers: customHeaders,
                        body: JSON.stringify(jbody)
                    })
                    .then(response => response.json())
                    .then(data => resolve(data));

            } catch (err) {
                console.log('[SERVERAPI][DOPOST]  ', err)
                reject(`POST ERROR ${err}`)
            }
        })
        return promise
    }
    //TODO:Implementar una integración con Atomic para evitar llamadas  qrepetidasue consistan en peticiones registradas por 1 segundo auto vanish
    async doGet(rUrl) {
        //OverCall Protection
        let promise = new Promise((resolve, reject) => {
            try {
                console.log(`doGet ${this.host}${this.relPath}${rUrl}`)
                fetch(`${this.host}${this.relPath}${rUrl}`,
                    {
                        method: 'GET',
                        headers: {
                            'auth-token': State.getToken()
                        }
                    })

                    .then(response => response.json())
                    .then(data => resolve(data));

            } catch (err) {
                console.error(err)
                reject(`GET ERROR ${err}`)
            }
        })
        return promise
    }

}