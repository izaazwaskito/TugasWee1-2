function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    if(nilaiAwal < nilaiAkhir){
      if(typeof nilaiAwal === "number" && typeof nilaiAkhir === "number" && Array.isArray(dataArray)){
          if(dataArray.length>5){
            filterArray(nilaiAwal,nilaiAkhir,dataArray)
          }else{
            console.log("Jumlah angka dalam dataArray harus lebih dari 5")
          }
      }
    }else{
      console.log("Nilai akhir harus lebih besar dari nilai awal")
    }
  }
  
  function filterArray(nilaiAwal, nilaiAkhir, dataArray){
    const hasil = dataArray.filter((item) => {
        if (item >= nilaiAwal && item <= nilaiAkhir) {
          return item;
        }
      })
      .sort((a, b) => a - b);
  
    if (hasil.length > 0) {
      console.log(hasil);
    } else {
      console.log("Nilai tidak ditemukan");
    }
  }
  
  seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
  seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
  seleksiNilai(5, 17 , [2, 25, 4])
  seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
  