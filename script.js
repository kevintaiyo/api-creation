//Criando as informações 
const info = '[{"Pessoa":{"Nome":"Jenna Ortega","Profissao":"Ator","Idade":"20","Serie":"Wandinha","Personagem":"Wandinha","Show":"images/Jennaortega.webp"}},{"Pessoa2":{"Nome":"Chadwick Booseman","Profissao":"Ator","Idade":"34","Serie":"Pantera Negra","Personagem":"TChala","Show":"images/booseman.webp"}},{"Pessoa3":{"Nome":"Pedro Pascal","Profissao":"Ator","Idade":"41","Serie":"The last Of Us","Personagem":"Joel","Show":"images/PedroPascal.jpg"}},{"Pessoa4":{"Nome":"Bella Rawsey","Profissao":"Ator","Idade":"19","Serie":"The Last Of Us","Personagem":"Ellie","Show":"images/Bella_Ramsey.PNG.webp"}},{"Pessoa5":{"Nome":"Gabriel Match","Profissao":"Ator","Idade":"51","Serie":"Suits","Personagem":"Harvey Specter","Show":"images/Gabriel_Macht.webp"}},{"Pessoa6":{"Nome":"Patrick J. Adans","Profissao":"Ator","Idade":"40","Serie":"Suits","Personagem":"Mike Ross","Show":"images/Patrick.png"}}]';

const Tojson = JSON.parse(info); // Transformando a variavel info para JSON
console.log(Tojson) // Console.log para fazer possives testes

document.getElementById("btn1").addEventListener('click', function (){
  document.getElementById("nome").innerHTML = 'Nome: ' + Tojson[0].Pessoa.Nome;
  document.getElementById("profissao").innerHTML= 'Profissão: ' + Tojson[0].Pessoa.Profissao
  document.getElementById("idade").innerHTML='Idade: ' + Tojson[0].Pessoa.Idade
  document.getElementById("programa").innerHTML='Serie: ' + Tojson[0].Pessoa.Serie
  document.getElementById("personagem").innerHTML='Personagem: ' + Tojson[0].Pessoa.Personagem
  document.getElementById("media").src=Tojson[0].Pessoa.Show
})

document.getElementById("btn2").addEventListener('click', function (){
  document.getElementById("nome").innerHTML = 'Nome: ' +Tojson[1].Pessoa2.Nome;
  document.getElementById("profissao").innerHTML= 'Profissão: ' + Tojson[1].Pessoa2.Profissao
  document.getElementById("idade").innerHTML= 'Idade: ' + Tojson[1].Pessoa2.Idade
  document.getElementById("programa").innerHTML='Filme: ' + Tojson[1].Pessoa2.Serie
  document.getElementById("personagem").innerHTML='Personagem: ' + Tojson[1].Pessoa2.Personagem
  document.getElementById("media").src=Tojson[1].Pessoa2.Show
})

document.getElementById("btn3").addEventListener('click', function (){
  document.getElementById("nome").innerHTML ='Nome: ' + Tojson[2].Pessoa3.Nome;
  document.getElementById("idade").innerHTML= 'Profissão: ' + Tojson[2].Pessoa3.Profissao
  document.getElementById("profissao").innerHTML= 'Idade: ' + Tojson[2].Pessoa3.Idade
  document.getElementById("programa").innerHTML='Serie: ' + Tojson[2].Pessoa3.Serie
  document.getElementById("personagem").innerHTML='Personagem: ' + Tojson[2].Pessoa3.Personagem
  document.getElementById("media").src=Tojson[2].Pessoa3.Show
})

document.getElementById("btn4").addEventListener('click', function (){
  document.getElementById("nome").innerHTML ='Nome: ' + Tojson[3].Pessoa4.Nome;
  document.getElementById("profissao").innerHTML= 'Profissão: ' + Tojson[3].Pessoa4.Profissao
  document.getElementById("idade").innerHTML= 'Idade: ' + Tojson[3].Pessoa4.Idade
  document.getElementById("programa").innerHTML='Serie: ' + Tojson[3].Pessoa4.Serie
  document.getElementById("personagem").innerHTML='Personagem: ' + Tojson[3].Pessoa4.Personagem
  document.getElementById("media").src=Tojson[3].Pessoa4.Show
})

document.getElementById("btn5").addEventListener('click', function (){
  document.getElementById("nome").innerHTML ='Nome: ' + Tojson[4].Pessoa5.Nome;
  document.getElementById("profissao").innerHTML= 'Profissão: ' +Tojson[4].Pessoa5.Profissao
  document.getElementById("idade").innerHTML= 'Idade: ' + Tojson[4].Pessoa5.Idade
  document.getElementById("programa").innerHTML='Serie: ' + Tojson[4].Pessoa5.Serie
  document.getElementById("personagem").innerHTML='Personagem: ' + Tojson[4].Pessoa5.Personagem
  document.getElementById("media").src=Tojson[4].Pessoa5.Show
})

document.getElementById("btn6").addEventListener('click', function (){
  document.getElementById("nome").innerHTML ='Nome: ' + Tojson[5].Pessoa6.Nome;
  document.getElementById("profissao").innerHTML='Profissão: ' + Tojson[5].Pessoa6.Profissao
  document.getElementById("idade").innerHTML= 'Idade: ' + Tojson[5].Pessoa6.Idade
  document.getElementById("programa").innerHTML='Serie: ' + Tojson[5].Pessoa6.Serie
  document.getElementById("personagem").innerHTML='Personagem: ' + Tojson[5].Pessoa6.Personagem
  document.getElementById("media").src=Tojson[5].Pessoa6.Show
})
    
       
