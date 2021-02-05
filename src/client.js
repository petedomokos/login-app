export default function fetch(params) {

    let paramsString = params ? Object.keys(params).reduce((prev, curr) => {

        const param = `${curr}=${params[curr]}&`;

        return prev + param;

    }, "?") : "";

    console.log(params);

    return window.fetch("http://localhost:5000/LoginCount" + paramsString);

}