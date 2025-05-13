function factorial(p){
    let fac = 1;
    for(i=1; i<=p; i++){
        fac *= i ;
    }
    return fac;
}
 console.log(factorial(3));
function prime(p){
    let result;
    if(factorial(p-1) % p == 0){
        document.getElementById("pm").innerHTML = p + " is not a prime number"
    }
    else{
        document.getElementById("pm").innerHTML = p + " is a prime number"
    }
    
}
document.getElementById("submit").addEventListener("click", function(){
    let num = document.getElementById("inp-num").value;
    prime(num)
})

document.getElementById("clear").addEventListener("click", function(){
    document.getElementById("inp-num").value = "" ;
    document.getElementById("inp-num").placeholder = "Enter the number you want to check" ;
    document.getElementById("pm").innerHTML = "Result"
})
