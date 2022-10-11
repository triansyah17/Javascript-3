// Membuat 2 program dengan method promise

// 1. Memeriksa wilayah JABODETABEK
// const cekWilayah = (wilayah) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const dataWilayah = ['jakarta', 'bogor', 'depok', 'tangerang', 'bekasi']

//             let check = dataWilayah.find((item)=>{
//                 return item === wilayah

//             })
//             if(check){
//                 resolve(`${check} Wilayah JABODETABEK`)
//             } else{
//                 reject(new Error (`${wilayah} Bukan wilayah JABODETABEK`))
//             }
//         }, 2000)
//     })
// }
// cekWilayah('tangerang')
// .then((wilayah) => {
//   console.log(wilayah);
// })

// .catch(
//         (error)=>{
//           console.log("" + error);
// })

// .finally(() => {
//   console.log('Done!');
// });

//2. Membuat program jodoh
//  const getWoman = (name) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const dataPria = ['adit', 'asep', 'andre']

//             let check = dataPria.find((item)=>{
//                 return item === name

//             })
//             if(check){
//                 resolve(`${check} Selamat cinta anda diterima`)
//             } else{
//                 reject(new Error (`${name} Mohon maaf cinta anda ditolak, jangan putus asa dan tetap semangat!!!`))
//             }
//         }, 4000)
//     })
// }
// getWoman('adit')

// .then((name) => {
//   console.log(name);
// })

// .catch(
//         (error)=>{
//           console.log("" + error);
// })

// .finally(() => {
//   console.log('Done!');
// });

// 3. Valdiasi Data
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data1 = 10;
    if (data1 > 10) {
      console.log(`data pertama = ${data1}`);
      resolve(data1);
    } else {
      reject("nilai awal kurang");
    }
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data2 = 20;
    if (data2 > 10) {
      console.log(`data kedua = ${data2}`);
      resolve(data2);
    } else {
      reject("maaf nilai kedua kurang");
    }
  }, 2 * 1000);
});

Promise.all([p1, p2])
  .then((results) => {
    const total = results.reduce((d1, d2) => p - a);

    console.log(`Results: ${results}`);
    console.log(`Selisih: ${total}`);
  })
  .catch((err) => {
    console.log(`Maaf ${err}`);
  });
