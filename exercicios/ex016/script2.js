function tabuada(){
    var num = window.document.getElementById('txtn')    
    let tab = window.document.getElementById('seltab')

    if((num.value.length) == 0){
        window.alert('Digite um número!')
    }else{
        var n = Number(num.value)

        var cont = 1
        tab.innerHTML = ''

        while(cont<=10){
            let item = window.document.createElement('option')
            item.text += `${n} x ${cont} = ${n*cont}`
            intem.value = `tab${cont}`
            tab.appendChild(item)
            
            cont++
        }
    }   
}