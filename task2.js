const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia"
]

function searchName(str, limit) {
    validasi(str, limit)
}
function cekNama(str, limit) {
    let hasil = name.filter((name) => name.toLowerCase().indexOf(str.toLowerCase()) != -1)
    hasil = hasil.slice(0, limit)
    callback(hasil)
}
function callback(hasil) {
    console.log(hasil);
}

function validasi(str, limit) {
    try {
        if (typeof str !== "string") 
            throw "nilai str harus string";
        
        if (isNaN(limit)) 
            throw "nilai limit harus number";
        
        cekNama(str, limit)
    } catch (err) {
        console.log(err)
    }
}

searchName("an", 3, callback);

searchName(3, 3, callback);

searchName("an", "an", callback);
// cekNama("an",3,callback)

