const name = [
  "Abigail", "Alexandra", "Alison",
  "Amanda", "Angela", "Bella",
  "Carol", "Caroline", "Carolyn",
  "Deirdre", "Diana", "Elizabeth",
  "Ella", "Faith", "Olivia", "Penelope"]

const searchName = (str, limit,  callback) =>{
  const hasil = name.filter((name)=>
  name.toLowerCase().indexOf(str.toLowerCase())!=-1)
  callback(hasil, limit)
}
callback = (hasil,limit) =>{
  hasil=hasil.slice(0,limit)
  console.log(hasil)
}
searchName("an",3,callback)