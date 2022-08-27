const user ={
    id: 1, 
    name: 'Rashed', 
    job:'Enrollment officer', 
    salar:12000
}
const stringified = JSON.stringify(user)
// console.log(user)
// console.log(stringified)
const jsonOb = JSON.parse(stringified)
console.log(jsonOb)
