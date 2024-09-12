/*const year = 2024
const birthyear = prompt("quelle ton année de naissance")
const age = year - birthyear
if (age <= 13){console.log("lilo & stitch")}
else if ( age < 18){
    console.log('matrix')
}
else if (age > 18){console.log("Evil dead")}*/

/*const a = prompt('donner un nombre')
const b = prompt('donner un second nombre')
const c = a * b
if (c > 0){console.log(`${a}*${b}=${c} est positif`)}
else {console.log(`${a}*${b}=${c} est négatif`)}*/

function canDrive (age, pays) {
    if (
        (age > 18 && pays === 'FR') ||
        (age > 16 && pays === 'US')
    ) {
        return true
    }
    return false
}

console.log(canDrive(19, 'FR'))