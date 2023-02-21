function hitungHarga(jumlah, hargaSatuan) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (jumlah <= 0 || hargaSatuan <= 0) {
        reject('Jumlah dan harga satuan harus lebih besar dari 0');
      } else {
        const totalHarga = jumlah * hargaSatuan;
        resolve(totalHarga);
      }
    }, 2000);
  });
}

hitungHarga(3, 1000)
  .then((total) => {
    console.log(`Total harga: ${total}`);
  })
  .catch((error) => {
    console.log(`Terjadi kesalahan: ${error}`);
  });



function getData() {
  return new Promise((resolve, reject) => {
    const data = [1, 2, 3, 4, 5];
    if (data.length > 0) {
      resolve(data);
    } else {
      reject("Data tidak ditemukan");
    }
  });
}

getData()
  .then((data) => {
    console.log(`Data berhasil diambil: ${data}`);
  })
  .catch((error) => {
    console.error(`Terjadi kesalahan: ${error}`);
  });

