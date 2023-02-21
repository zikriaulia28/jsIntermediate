// Promise merupakan perwakilan dari sebuah nilai yang belum tentu diketahui nilainya saat promise dibuat. Promise memungkinkan pengguna untuk menghubungkan fungsi handler dengan keberhasilan atau kegagalan aksi asynchronous.


const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
      let cek = dataDay.find((item) => {
        return item === day
      })
      if (cek) {
        resolve(cek)
      } else {
        reject(new Error('Hari ini bukan hari kerja'))
      }
    }, 3000)
  })
}

const cekHariKerjaThen = () => {
  cekHariKerja("senin").then((result) => {
    console.log(result + " adalah hari kerja")
  }).catch((error) => {
    console.error(error.message)
  });
}
cekHariKerjaThen()

// than () untuk menangani hasil promise yang dikembalikan  oleh fungsi cekHariKerja()
// jika promise berhasil diresolve maka nilai yang dikembalikan akan ditangkap dan di tampilkan menggunakan console.log
// jika promise mengalami reject, maka error message yang dikirimkan dalam reject akan di tampilkan menggunakan console.error

const cekHariKerjaTry = async () => {
  try {
    const result = await cekHariKerja("sabtu")
    console.log(result + " adalah hari kerja")
  } catch (error) {
    console.error(error.message)
  }
}
cekHariKerjaTry()

// await digunakan pada pemanggilan fungsi cekHariKerja agar fungsi tersebut menunggu hingga promise selesai dijalankan.
// Jika promise berhasil di-resolve, maka nilai yang di-resolve akan disimpan pada variabel result.
// Namun, jika promise di-reject, maka error yang dihasilkan akan ditangkap oleh catch,
// dan pesan error tersebut akan dicetak ke console.


// try async await 