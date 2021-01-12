function gerarTabuada(){
    var fn = window.document.getElementById('txtn')
    var n = Number(fn.value)
    var tab = window.document.getElementById('seltab')

    if(fn.value.length == 0){
        window.alert('[ERRO] Digite um número!')
    } else{
        tab.innerHTML = ''
        for(cont = 1; cont <=10; cont++){
            let item = window.document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            item.value = `tab${c}`
            tab.appendChild(item)
    }
    }
}