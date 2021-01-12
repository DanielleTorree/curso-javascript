function contar(){
    var fn1 = window.document.getElementById('txtn1')
    var fn2 = window.document.getElementById('txtn2')
    var fpa = window.document.getElementById('txtpa')
    var res = window.document.getElementById('res')

    if((fn1.value.length) == 0 || (fn2.value.length) == 0 || (fpa.value.length) == 0){
        window.alert('[ERRO]')
    }else{
        res.innerHTML = 'Contando... <br>'
        var n1 = Number(fn1.value)
        var n2 = Number(fn2.value)
        var fp = Number(fpa.value)

        if(fp<=0){
            window.alert('Passo inválido! Considerando PASSO 1')
            fp = 1
        }

        if(n1 < n2){
            for(var cont = n1; cont <= n2; cont += fp){
                res.innerHTML += `${cont} \u{1F449}`
            }
        } else if(n1 > n2){
            for(var cont = n1; cont >= n2; cont -= fp){
                res.innerHTML += `${cont} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

