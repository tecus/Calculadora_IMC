const inputPeso = document.querySelector('#Peso')
const inputAltura = document.querySelector('#Altura')
const btnCalcular = document.querySelector('#Calcular')
const btnReiniciar = document.querySelector('#Reiniciar')
const imcFinal = document.querySelector('#Imc')
const dial = document.getElementById('dial')

btnCalcular.addEventListener('click', () =>{
    let resultado;
    if(isNaN(inputAltura.value) || isNaN(inputPeso.value) || inputPeso.value <=0 || inputAltura.value<=0.3 || inputAltura.value>251){
        imcFinal.style.background=`white`
        dial.style.transform=`rotate(90deg)`
        dial.style.bottom=`0`
        imcFinal.textContent=''
        alert() 
        return
    }
    
    inputAltura.value>2.51 ?  resultado = ((inputPeso.value)/(inputAltura.value/100)**2).toFixed(1) : resultado = ((inputPeso.value)/(inputAltura.value)**2).toFixed(1)
    imcFinal.textContent=`${resultado}`
    let calcular;
    if(resultado>=18.5 && resultado<=24.9){
        calcular = (resultado-18.5)*6.6
        console.log(calcular);
        imcFinal.style.background=`#006CFF`
        dial.style.transform=`rotate(${calcular}deg)`
        dial.style.bottom=`0`
    }else if(resultado>=25 && resultado<=29.9){
        calcular = resultado-25;
        calcular<=1 ? calcular = (resultado*2.15) : calcular>1 && calcular<=2 ? calcular = (resultado*2.35) : calcular>2 && calcular<3 ? calcular = (resultado*2.55)  : calcular>=3 && calcular<4 ? calcular = (resultado*2.75) : calcular>=4 && calcular<=4.9 ? calcular = (resultado*2.9) : ''
        imcFinal.style.background=`#45CD36`
        dial.style.transform=`rotate(${calcular}deg)`
        dial.style.bottom=`0`
    }else if(resultado>=30 && resultado<=34.9){
        calcular = resultado-30;
        calcular<=1 ? calcular = (resultado*3.15) : calcular>1 && calcular<=2 ? calcular = (resultado*3.35) : calcular>2 && calcular<3 ? calcular = (resultado*3.55)  : calcular>=3 && calcular<4 ? calcular = (resultado*3.75) : calcular>=4 && calcular<=4.9 ? calcular = (resultado*3.95) : ''
        imcFinal.style.background=`#FFD401`
        dial.style.transform=`rotate(${calcular}deg)`
        dial.style.bottom=`5px`
    }else if(resultado>=35 && resultado<40){
        calcular = resultado-35;
        calcular<=1 ? calcular = (resultado*4.1) : calcular>1 && calcular<=2 ? calcular = (resultado*4.2) : calcular>2 && calcular<3 ? calcular = (resultado*4.25)  : calcular>=3 && calcular<4 ? calcular = (resultado*4.35) : calcular>=4 && calcular<=4.9 ? calcular = (resultado*4.55) : ''
        imcFinal.style.background=`#FF3D1A`
        dial.style.transform=`rotate(${calcular}deg)`
        dial.style.bottom=`10px`
    }else if(resultado>=40){
        imcFinal.style.background=`#FF3D1A`
        dial.style.transform=`rotate(180deg)`
        dial.style.bottom=`9px`
    }else if(resultado<=18.4){
        imcFinal.style.background=`#006EFF`
        dial.style.transform=`rotate(0deg)`
        dial.style.bottom=`0`
    }
})

function alert(){
    Swal.fire({
        title: '¡Datos incorrectos!',
        text: 'Ingresaste datos incorrectos o incompletos',
        icon: 'error',
        confirmButtonText: 'cerrar',
    })
}

btnReiniciar.addEventListener('click', ()=>{
    inputPeso.value=''
    inputAltura.value=''
    imcFinal.textContent=''
    imcFinal.style.background=`white`
    dial.style.transform=`rotate(90deg)`
    dial.style.bottom=`0px`
})