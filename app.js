let p_total = document.querySelector(".p_total")
let p_amount = document.querySelector(".p_amount")
let dolarinput = document.querySelector("#dolar_inp")
let peaple_input = document.querySelector("#peaple_inp")
let custom_input = document.querySelector(".custom")
let radiobtn = document.querySelectorAll(".radiobtn")
function reset() {
    p_total.innerHTML = "0,00"
    p_amount.innerHTML = "0,00"
    dolarinput.value = ""
    peaple_input.value = ""
    custom_input.value = ""
}

dolarinput.addEventListener('input',call)
peaple_input.addEventListener('input',call)

radiobtn.forEach(function(val){
    val.addEventListener('click',call)
})
custom_input.addEventListener('input',call)

function call() {
    radio = document.querySelector(".radiobtn[name='tip']:checked")
    
    if(custom_input.value != "" && dolarinput.value > 1 && peaple_input.value > 1){
        let percent = dolarinput.value * (custom_input.value / 100)
        let total_per_person = (Number(dolarinput.value) + Number(percent)) / peaple_input.value
        p_total.innerHTML = `${total_per_person.toFixed(2).replace(".",",")}`
        p_amount.innerHTML = `${(percent/peaple_input.value).toFixed(2).replace(".",",")}`
    }else if (dolarinput.value > 1 && peaple_input.value > 1 && radio.value > 1) {
        let percent = dolarinput.value * (radio.value / 100)
        let total_per_person = (Number(dolarinput.value) + Number(percent)) / peaple_input.value
        p_total.innerHTML = `${total_per_person.toFixed(2).replace(".",",")}`
        p_amount.innerHTML = `${(percent/peaple_input.value).toFixed(2).replace(".",",")}`
    }
}

