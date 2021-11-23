function login() {
    var nome = window.prompt("Digite seu nome")
    var div = document.getElementById("nome")

    if (nome == "") {
        alert("Preencha o campo")

    }
    else {
        div.innerHTML = `Bem vindo, ${nome}`
    }


}

function carrinho(idbutton) {

    if (typeof itens == "undefined") {
        itens = []
    }
    else {

        var idtrocado = idbutton.replace("btn", "item")
        var desc = document.getElementById(idtrocado).children[1].textContent
        var id = document.getElementById(idbutton).value
        var modal= document.getElementById("modal")
        modal.innerHTML = ""

        alert("Item adicionado com sucesso")
        itens.push({
            id: id,
            item: desc

        })

        for(var x = 0; x < itens.length; x++){
          //  modal.innerHTML = itens[x].item
          var p = document.createElement("P")
          p.innerHTML = itens[x].item
          modal.appendChild(p)
        }


    }
}