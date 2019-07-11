class Request {

  get(url){
    return fetch(url)
    .then((res)=> console.log(res));
    //.then((res) => res.json());
  }

}

export default Request;
