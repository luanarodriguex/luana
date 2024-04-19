const botoes = document.querySelectorAll("botao")
console.log(botoes)
for(let i=0;<botoes.length;i++){
    botoes [I].onclick = function(){
        botoes[i].classList.add("ativo");
    
        for(let j=0;j<botoes)