

//2a
var o1 = {
bokstaver: "EL",
tall: 12345,
"string egenskap med mellomrom": 3

get regNr(){
  return this.bokstaver + this.tall;
},

utregning: function(){
  return this.tall / 2
},

utregning2: function (){
  return minFunksjon(100,78)
}

}

//2c
o1.bokstaver = "ST";
o1(tall) = 6789;
o1("string egenkap med mellomrom") = 4;




function minFunksjon (a, b){
  return a + b;
}


var stian = {
  fornavn: "Stian",
  etternavn: "Botnevik",
  get navn(){
    return this.fornavn + " " + this.etternavn;
  }

}
var john = {
  fornavn: "John",
  etternavn: "Botnevik",
  get navn(){
    return this.fornavn + " " + this.etternavn;
  }

}

var espen = {
  fornavn: "Espen",
  etternavn: "Botnevik",
  get navn(){
    return this.fornavn + " " + this.etternavn;
  }

}

var fam = [stian, john, espen];

//eller

fam.push(espen);
fam.push(stian);ß
fam.push(john);

for (p in fam){
  console.log(fam[p].navn);
}
