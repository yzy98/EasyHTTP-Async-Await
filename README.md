# EasyHTTP-Async-Await

A customized REST API using Async and Await in pure JavaScript.


## How to use

Step1. Download file ___easyhttp.js___, copy it into your project

Step2. Initialize an EasyHTTP object in your ___App.js___ or related js files:
            `const http = new EasyHTTP();`

Step3. Using REST API:

* GET
`http.get(url).then(data => console.log(data)).catch(err => console.log(err));`

* POST
`http.post(url, newData).then(data => console.log(data)).catch(err => console.log(err));`

* PUT
`http.put(url, id, newData).then(data => console.log(data)).catch(err => console.log(err));`

* DELETE
`http.delete(url, id).then(data => console.log(data)).catch(err => console.log(err));`


