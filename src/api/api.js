

const URL = {
  // base: "http://10.0.2.2:3000",
  // base: "http://localhost:3000",
  base: "https://ruttradarvalkiria.jmjdrwrk.repl.co",
  sessionid: ""
  // sessionid: "anJvbWFuQGdtYWlsLmNvbQ=="
}


export default class ServerApi {
  static async test() {
    console.log('testing ServerApi')

    console.log('tested ServerApi')
  }

  static async doPost(rUrl, jbody) {
    //OverCall Protection

    let promise = new Promise((resolve, reject) => {
      try {
        console.log(`attemptigng ${URL.base}${rUrl}`)
        fetch(`${URL.base}${rUrl}`,
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('auth-token')
            },
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
  //TODO:Implementar una integración con Atomic para evitar llamadas repetidas que consistan en peticiones registradas por 1 segundo auto vanish
  static async doGet(rUrl) {
    //OverCall Protection
    let promise = new Promise((resolve, reject) => {
      try {
        fetch(`${URL.base}${rUrl}`,
          {
            method: 'GET',
            headers: {
              'auth-token': localStorage.getItem('auth-token')
            }
          })

          .then(response => response.json())
          .then(data => resolve(data));

      } catch (err) {
        reject(`GET ERROR ${err}`)
      }
    })
    return promise
  }

  static async RAW_GET(rUrl) {
    let promise = new Promise((resolve, reject) => {
      try {
        fetch(rUrl,
          {
            method: 'GET',
            headers: {
              'auth-token': localStorage.getItem('auth-token')
            }
          })

          .then(response => response.json())
          .then(data => resolve(data));

      } catch (err) {
        reject(`GET ERROR ${err}`)
      }
    })
    return promise
  }
}