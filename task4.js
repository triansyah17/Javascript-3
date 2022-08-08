let janji = new Promise((resolve, reject) => {
    const fetch = require('cross-fetch');
    const fetchData = fetch('https://jsonplaceholder.typicode.com/users');
    fetchData.
    then(response => {
        if(response.status === 200){
            resolve('Data Berhasil')
            return response.json();
        } else if(response.status === 404) {
            reject(new Error('URL not found'))
        } else {
            reject(new Error('Data Gagal'))
        }
    })
    .then(nilai => {
        if(nilai !== undefined){
            nilai.map(data => {
                console.log(`get user id ${data.id} with name: ${data.name}`);
            })
        }
    })
})
const getAllData = () => {
    prom.then((nilai) => {
        console.log('Berhasil' + nilai)
    })
    .catch((err) => {
        console.log('Error: ' + err.message)
    })
}