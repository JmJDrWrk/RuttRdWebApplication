import ServerApi from "./api"
import State from "./state"
export default class PublishAPI {

  static async getPublishById(id) {
    console.error('DEPRECATED')
    const res = await ServerApi.doGet('/users/asdasd')
    if (!res.error) {
      console.log('res: ' + JSON.stringify(res))
      //   State.setOther(res)
      new Error('Cant obtain profile data!')
    }
    return res
  }

  static async publishPhoto(formData) {
    console.error('DEPRECATED')
    fetch("https://ruttradarvalkiria.jmjdrwrk.repl.co/users/photo/upload", {
      method: "POST",
      body: formData,
      headers : {
        "auth-token": localStorage.getItem('auth-token')
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response from the server
        console.log(data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }
  //   fetch(State.fileshost + "users/photo/upload", {
  //     method: "POST",
  //     body: formData,
  //     headers : {
  //       "auth-token": localStorage.getItem('auth-token')
  //     }
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       console.error(error);
  //     });
  // }
}