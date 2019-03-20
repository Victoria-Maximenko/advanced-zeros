module.exports = function getZerosCount(number, base) {
  // your implementation
  function getSimpleMn(x){
  var arr = [];
  if(x > 0 && x != 1){
    for(let i = 2; i <= x; i++){
      while(x % i == 0 && x > 1){
        arr.push(i);
        x = x / i;
      }
      if(x/i == 1) arr.push(x);
    }
    return arr;
  } else if(x == 1) return 1;
  return 'Введите не отрицательное число';
}

function RezultatDeleniya(p1,p2,p3){
  var chislo = p1;
  var mnogitel = p2;
  var count = p3;
  var cifra=1;
  var rezultat=0;

  while (cifra>=1) {
   cifra=Math.floor(chislo/mnogitel);
   rezultat=rezultat+cifra;
   mnogitel=mnogitel * p2;
  }
  return Math.floor(rezultat/count);
}

  var newArray = getSimpleMn(base);
  var MassivRezultatDeleniya = [];
  var i=0;
  var j=0;
  var a=0;
  var count=0;
  while(i < newArray.length){
    while(j < newArray.length){
      if (newArray[i]==newArray[j]) count++;
      j++;
    } 
    MassivRezultatDeleniya[a] = RezultatDeleniya(number, newArray[i], count);
    a++;
    i=i+count;     
    j=i;
    count=0;
  }

  var oldrezultat = MassivRezultatDeleniya[0];
  var newrezultat = 0;
  for (var i = 0; i < MassivRezultatDeleniya.length; i++) {
    newrezultat  = MassivRezultatDeleniya[i];
    if (newrezultat <= oldrezultat) oldrezultat=newrezultat;
  }
  return oldrezultat;
}