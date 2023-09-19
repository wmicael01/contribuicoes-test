class Tarefa  {
    #elemento = [];
    #ul;

    constructor(){
        this.#ul = document.querySelector(".container");
        this.#elemento = this.#elemento;
        this.verificarUl();
    }

    verificarUl(){
        if(this.#ul.innerHTML === "" && this.#elemento.length == 0){
            const verifica = this.#ul.innerHTML= "Nenhuma tarefa adicionada";
            return verifica;
        }
    }

    pegarValor(){
        const input = document.querySelector(".campo-adicionar");
        let valor = input.value;
        
        if(valor){
            this.adicionar(valor);
            this.criarView();
            this.limparCampo(valor, input);
            this.verificarUl();
        }else {
            this.validaCampo(valor);
        }
    }

    adicionar(input){
        this.buscaElemento.push({id: 0, itemTarefa: input});
    }

    criarView(){
        this.buscaUl.innerHTML = ""
        this.buscaElemento.forEach((itemElemento, indexElemento) => {
            this.buscaUl.innerHTML += `
                <li>
                    <img class="logo-concluir" src="/assets/img/verificar.png" onClick="concluir(${indexElemento})" alt="logo-concluir">
                    <span>${itemElemento.itemTarefa}</span>
                    <img class="logo-excluir" src="/assets/img/excluir.png" onClick="excluir(${indexElemento})" alt="logo-excluir">
                </li>
            `
        })
    }

    validaCampo(valor){
       if(valor == ""){
            alert("O campo deve ser preenchido!");
       }
    }

    get buscaUl(){
        return this.#ul;
    }

    set buscaUl(lista){
        return this.#ul = lista;
    }

    get buscaElemento(){
        return this.#elemento;
    }

    set buscaElemento(novoElemento){
        return this.#elemento = novoElemento;
    }


    limparCampo(valor,input){
        if(valor){
            input.value = ""
        }
    }
}

const tarefa = new Tarefa();
console.log(tarefa);

const form = document.querySelector(".form");
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    tarefa.criarView();
    tarefa.pegarValor();
})

function excluir(posicao){
    tarefa.buscaElemento.splice(posicao, 1);
    console.log(tarefa.buscaElemento)
    tarefa.criarView();
    tarefa.verificarUl();
}
