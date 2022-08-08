const cekHariKerja = (day) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
          
            let check = dataDay.find((item)=>{
                return item === day
         
            })
            if(check){
                resolve(`${check} adalah hari kerja`)
            } else{
                reject(new Error (`${day} bukan hari kerja`))
            }
        }, 3000)
    })       
}
cekHariKerja('senin')
// then digunakan jika suatu promise terpenuhi (resolve)
.then((day) => {  
  console.log(day);
})

// catch digunakan jika suatu promise tidak terpenuhi (reject)
.catch(
        (error)=>{
          console.log(""+error);
})

// finally digunakan sebagai penanda promise telah selesai diproses
.finally(() => {
  console.log('Done!');
});