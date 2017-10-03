function getTriangleArea (base, height) {
    
    if (base <= 0 && height <=0) {
        return "nieprawidłowe dane";
    }
    
    return base*height/2;
}

var a,
    h;

a = prompt('Enter base');
h = prompt('Enter height');

document.getElementById("result").innerHTML = 'Triangle field<br>with base '+a + ' and height ' + h + '<br>is equal to: ' + getTriangleArea(a,h);

console.log(getTriangleArea(a, h));

