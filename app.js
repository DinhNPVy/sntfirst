function checkSNT(n){


    if (n < 2) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}



let number = parseInt(prompt("Nhập vào số n: "));
let count = 0;
let i = 2;
while(count < number){
    if(checkSNT(i)){
        
        document.write(i + "<br>");
        count++;
    }
    i++;
}

