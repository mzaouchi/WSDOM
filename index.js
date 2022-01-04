// var titre = document.getElementsByTagName('h1') //Html collection
// console.log(titre)
// titre[0].style.color = 'red'
// var paragraphe = document.getElementById('main')
// console.log(paragraphe)
// var paragraphP = document.getElementsByClassName('paraF')
// console.log(paragraphP)

// var quer = document.querySelector('p')
// var quer1 = document.querySelector('.paraF')
// var quer2 = document.querySelector('#main')
// console.log(quer2)

// var hachem = document.getElementsByClassName('paraF')
// var quer = document.querySelectorAll('.paraF')
// console.log(hachem)
// console.log(quer)


// var title = document.querySelector('h1')
// console.log(title.innerHTML)
// console.log(title.innerText)
// var main = document.getElementById('main')
// console.log(main.innerHTML)
// console.log(main.innerText)


// var paraT = document.querySelector('#main')
// console.log(paraT.firstElementChild.innerHTML)
// console.log(paraT.lastElementChild.innerText)
// var hyper = document.querySelector('h1')
// console.log(hyper.parentElement.innerText)
// var paro = document.querySelector('.paraF')
// console.log(paro.innerHTML)
// console.log(paro.previousElementSibling.innerHTML)
// console.log(paro.nextElementSibling.innerHTML)
// console.log(hyper.nextElementSibling.nextElementSibling.innerHTML)

// var cat = document.createElement('h2')
// cat.innerHTML = 'Sofiene'
// var par = document.getElementById('main')
// par.appendChild(cat)
// var sarra = document.querySelector('.paraF')
// par.insertBefore(cat,sarra)
// par.insertBefore(cat,sarra)
// par.remove()


// var par = document.getElementById('main')
// par.setAttribute('class','Sahla')
// console.log(par)


function AletSahla(){
    alert('Hello Sofiene')
}
// i = i + 1     i++

// var btnPlus = document.querySelector('.plus')
// var btnMoins = document.querySelector('.moins')

// btnPlus.addEventListener('click',function(){
//     btnPlus.nextElementSibling.innerHTML++
//     // btnPlus.nextElementSibling.innerHTML = Number(btnPlus.nextElementSibling.innerHTML) + 1
// })

// btnMoins.addEventListener('click',function(){
//     if(btnMoins.previousElementSibling.innerHTML>0){
//         btnMoins.previousElementSibling.innerHTML--
//     }    
// })

var btnsPlus = document.getElementsByClassName('plus')
var btnsMoins = document.getElementsByClassName('moins')

for(let i = 0;i<btnsPlus.length;i++){
    btnsPlus[i].addEventListener('click',function(){
    btnsPlus[i].nextElementSibling.innerHTML++
    // btnPlus.nextElementSibling.innerHTML = Number(btnPlus.nextElementSibling.innerHTML) + 1
})
}



for(let i = 0;i<btnsMoins.length;i++){
    btnsMoins[i].addEventListener('click',function(){
            if(btnsMoins[i].previousElementSibling.innerHTML>0){
                btnsMoins[i].previousElementSibling.innerHTML--
            }    
        }
    )
}



