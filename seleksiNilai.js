function nilaiSeleksi(nilaiAwal, nilaiAkhir, dataArray) {
  if (typeof nilaiAwal !== "number" || typeof nilaiAkhir !== "number") {
    return 'Nilai Bukan Angka';
  }
  if (nilaiAwal >= nilaiAkhir) {
    return 'Nilai akhir harus lebih besar dari nilai awal';
  }
  if (!Array.isArray(dataArray)) {
    return 'Data Array harus berupa array';
  }
  if (dataArray.length < 5) {
    return 'Jumlah angka dalam data Array harus lebih dari 5';
  }
  // filter data yang sesuai kriteria
  const filterDatas = dataArray.filter(data => data >= nilaiAwal && data <= nilaiAkhir);

  // cek data kurang

  // urutkan hasil pencarian
  const sortDatas = filterDatas.sort((a, b) => a - b);
  if (sortDatas.length > 0) {
    return sortDatas
  } else {
    return 'Nilai tidak ditemukan'
  }
}

console.log(nilaiSeleksi(5, 20, [2, 25, 4, 14, 17, 30, 8]))
console.log(nilaiSeleksi(15, 3, [2, 25, 4, 14, 17, 30, 8]))
console.log(nilaiSeleksi(4, 17, [2, 25, 4]))
console.log(nilaiSeleksi(5, 17, [2, 25, 4, 1, 30, 18]))
console.log(nilaiSeleksi("a", 20, [2, 25, 4, 14, 17, 30, 8]))
console.log(nilaiSeleksi(5, 20, "a"))
