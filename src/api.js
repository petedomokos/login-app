//mock success
/*
export const attemptLogin = (credentials) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve({jwt:'mock token', name: "Andy Davis"});
    },1000)
  })
}
*/


//mock failure

export const attemptLogin = (credentials) =>{
   return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve({error:'Username not recognised'});
      },1000)
   })
}


export default function fetch(params) {
    let paramsString = params ? Object.keys(params).reduce((prev, curr) => {
        const param = `${curr}=${params[curr]}&`;
        return prev + param;
    }, "?") : "";

    console.log(params);
    return window.fetch("http://localhost:3000/user-stats" + paramsString);

}
