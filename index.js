var nomePeca = "Peca Teste"
var pesoPeca = 300
var podeCadastrar = true
var listaPecas = []

if (pesoPeca < 100){
    console.log("Não há possibilidade de cadastrar!")
    podeCadastrar = false
}

if (listaPecas.length > 10){
    console.log("Limite de peças atingido")
    podeCadastrar = false
}

if (nomePeca.length < 3){
    console.log("Tamanho de letras inferior ao permitido")
    podeCadastrar = false
}

if (podeCadastrar){
    listaPecas.push(nomePeca)
    console.log("Cadastramento efetuado com sucesso")
}else{
    console.log("Houve problemas para cadastrar a peça")
}

console.log("Listando as peças cadastradas: ")
for (let i=0; i<listaPecas.length; i++){
    console.log(listaPecas[i])
}