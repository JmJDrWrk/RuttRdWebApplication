var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "name": "eljota",
    "email": "jroman@mail.com",
    "password": "12736178236",
    "phone_number": "65456654"
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("https://ruttradarvalkiria.jmjdrwrk.repl.co/users/login", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));



fetch("https://ruttradarvalkiria.jmjdrwrk.repl.co/users/login", {
    "headers": {
        "accept": "*/*",
        "accept-language": "es-ES,es;q=0.9",
        "auth-token": "false",
        "content-type": "application/json",
        "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site"
    },
    "referrer": "http://localhost:3000/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "[object Object]",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
});