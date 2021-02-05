//mock success
/*export const attemptLogin = (credentials) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve({jwt:'mock token'});
    },1000)
  })
}*/

//mock failure

export const attemptLogin = (credentials) =>{
   return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve({error:'Username not recognised'});
      },1000)
   })
}
