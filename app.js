//Inputs e Variáveis
let p_total = document.querySelector(".p_total")
let p_amount = document.querySelector(".p_amount")
let dolarinput = document.querySelector("#dolar_inp")
let peaple_input = document.querySelector("#peaple_inp")
let custom_input = document.querySelector(".custom")
let radiobtn = document.querySelectorAll(".radiobtn")
let cant = document.querySelector(".cant")
let inp_Peaple = document.querySelector(".inp_peaple")
//Função para resetar o splicer
function reset() {
    radio = document.querySelector(".radiobtn[name='tip']:checked")
    if(radio != null){
        radio.checked = false
    }
    p_total.innerHTML = "0,00"
    p_amount.innerHTML = "0,00"
    dolarinput.value = ""
    peaple_input.value = ""
    custom_input.value = ""
    inp_Peaple.style.border = ""
    cant.style.display = "none"
}
//Chamada da função principal
dolarinput.addEventListener('input', call)
peaple_input.addEventListener('input', call)
peaple_input.addEventListener('input', cantBeZero)

radiobtn.forEach(function (val) {
    val.addEventListener('click', call)
})
custom_input.addEventListener('input', call)

//Função para o Input peaple Não ser 0
function cantBeZero(){
    if(peaple_input.value == 0){
        cant.style.display = "block"
        inp_Peaple.style.border = "2px solid rgb(231, 114, 67)"
    }else{
        cant.style.display = "none"
        inp_Peaple.style.border = ""
    }
}
//Função dos calculos
function total(inp) {
    let percent = dolarinput.value * (inp.value / 100)
    let total_per_person = (Number(dolarinput.value) + Number(percent)) / peaple_input.value
    let totalComplete = total_per_person.toFixed(2).replace(".", ",")
    let amountComplete = (percent / peaple_input.value).toFixed(2).replace(".", ",")
    if(totalComplete.toString().length > 8){
        p_total.innerHTML = "ERRO"
        window.alert("O Número do TOTAL foi maior do que o supotado pelo site");
    }else{
        p_total.innerHTML = `${totalComplete}`
    }
    if(amountComplete.toString().length > 8){
        p_amount.innerHTML = "ERRO"
        window.alert("O Número da GORJETA foi maior do que o supotado pelo site");
    }else{
        p_amount.innerHTML = `${amountComplete}`
    }
    
    
}
//Autenticador/Função principal
function call() {
    

    radio = document.querySelector(".radiobtn[name='tip']:checked")
    
    if (custom_input.value != "" && dolarinput.value > 1 && peaple_input.value > 1) {
        total(custom_input)
    } else if (dolarinput.value > 1 && peaple_input.value > 1 && radio.value > 1) {
        total(radio)
    }
}

