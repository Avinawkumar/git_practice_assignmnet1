
function checkPrime (n){
    let count=0;
    for(let i=1; i<=n/2; i++){
      if(n%i==0){
        count++;
      }
    }
    if(count==1){
          console.log("Prime Number");
          } else {
          console.log("Not a Prime Number");
          }
  }
  checkPrime(13);