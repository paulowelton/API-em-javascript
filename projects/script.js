let inputCEP = document.querySelector(".cep")

inputCEP.addEventListener("keydown",(e)=>{           
    let res = e.target.value
    if(e.key == 'Enter'){
        chamarApi(res)
    }
})

function chamarApi(cep){
    const endpoint = 'https://viacep.com.br/ws/'+cep+'/json/'
    fetch(endpoint).then(resposta =>
        resposta.json())
        .then(dados => {    
            const logradouro = document.querySelector("#logradouro").value = dados.logradouro
            const bairro = document.querySelector("#bairro").value = dados.bairro
            const localidade = document.querySelector("#localidade").value = dados.localidade
            const uf = document.querySelector("#uf").value = dados.uf       
        console.log(dados)
    })
}
