const http = new EasyHTTP();

http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// http.post('https://jsonplaceholder.typicode.com/users', {"name": "Lebron James"})
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users', 5, {"name": "Lebron James"})
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// http.delete('https://jsonplaceholder.typicode.com/users', 5)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));