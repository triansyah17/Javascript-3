const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', "September", 'Oktober', 'November', 'Desember']
        if (!error) {
            callback(null, month)
        } else{
            callback(new Error('Sorry Data is not Found'))
        }
    }, 1000);
}

//callback function
const newMonth = (err, month) => {
    try {
        if(month.length === 0) throw err
        else {
            month.map(nilai => {
                console.log(nilai)
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}
getMonth(newMonth)