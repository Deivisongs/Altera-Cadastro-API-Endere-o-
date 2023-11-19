const inputFile =  document.getElementById('imagem');
const inputImagem =  document.getElementById('imagem-perfil');
const imagempadrao = '<img src="img/usuario.png" alt="" class="img-perfil">';
inputImagem.innerHTML = imagempadrao;

inputFile.addEventListener('change', function(e){
    const inputTarget = e.target
    const file = inputTarget.files[0]
    
    
    if(file){
        const reader = new FileReader()

        reader.addEventListener('load', function(e){
            const readerTarget = e.target
            inputImagem.innerHTML = ``;
            const img = document.createElement("img")
            img.src = readerTarget.result
            img.classList.add('img-perfil')

            inputImagem.appendChild(img)
        })
        reader.readAsDataURL(file)
        
    }else{
        inputImagem.innerHTML = imagempadrao;
    }
})

let adress = document.getElementById("adress")
let bairro = document.getElementById("bairro")
let city = document.getElementById("city")
let estado = document.getElementById("uf")

let test = {
    bairro: "",
    cep: "",
    complemento: "",
    ddd : "",
    gia: "",
    ibge: "",
    localidade: "",
    logradouro : "",
    siafi: "",
    uf:""
}


function cepp(){
    let cep = document.getElementById("zip-cod").value
    if(document.getElementById("zip-cod").value.length < 1){
        alert("Preencha o campo CEP")
    }else if(document.getElementById("zip-cod").value.length !== 8){
        alert("Digite um CEP válido")
    }else{
        api = fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => {
            res.json().then(dados => {
                test = dados
                validaDados()
            })
            
        }).catch(erro => {
                console.log(erro + "erro na requisição")
        })
    }
      
}

function validaDados(){
    console.log(test.logradouro)
    if(test.logradouro === undefined){
        
        alert("CEP não encontrado ou inválido")
    }else{
        adress.style.background = "#dadada"
        document.getElementById("adress").value = test.logradouro
        bairro.style.background = "#dadada"
        document.getElementById("bairro").value = test.bairro
        city.style.background = "#dadada"
        document.getElementById("city").value = test.localidade
        estado.style.background = "#dadada"
        document.getElementById("uf").value = test.uf
    }
}
function fim(){
    alert("Dados enviados com Sucesso!!!")
}
function apagaPhoto(){
    alert("Foto Apagada!!!")
}
