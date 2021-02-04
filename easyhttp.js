class EasyHTTP {

  // GET
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();

    return resData;
  }

  // POST
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  // PUT
  async put(url, id, data) {
    const response = await fetch(url + `/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  // DELETE
  async delete(url, id) {
    const response = await fetch(url + `/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });

      const resData = await 'Resource deleted...'
      return resData;
  }
}