let name = "XYZ"
function normalF() {
    return function thisvalue() {
        return this.name;
    }
}

let arrowF = () => {
 
    return  thisvalue => {
        return this.name
    } 
}
console.log(normalF().name)
console.log(arrowF().name)