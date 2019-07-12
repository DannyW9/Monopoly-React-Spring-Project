class Request {

  get(url){
    console.log(url);
    return fetch(url)
    .then((res) => res.json());
  }

}

export default Request;
