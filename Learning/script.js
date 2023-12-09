const x = 1;
a();
console.log("global x:", x);
b();
function a(){
    const y = 10;
    console.log("a: ", y);
}

function b(){
    let z = 100;
    console.log("b: ", z);
}

