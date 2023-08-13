const subhanAllahDisplay = document.getElementById('subhanAllahDisplay')
const subhanAllahIncrementbtn = document.getElementById('subhanAllahIncrementBtn')
const subhanAllahDecrementbtn = document.getElementById('subhanAllahDecrementBtn')

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay')
const alhamdulillahIncrementbtn = document.getElementById('alhamdulillahIncrementBtn')
const alhamdulillahDecrementbtn = document.getElementById('alhamdulillahDecrementBtn')

const allahuAkbarDisplay = document.getElementById('allahuAkbarDisplay')
const allahuAkbarIncrementBtn = document.getElementById('allahuAkbarIncrementBtn')
const allahuAkbarDecrementBtn = document.getElementById('allahuAkbarDecrementBtn')

const resetBtn = document.getElementById('resetBtn')

// ------subhanallah start-------
let subhanAllahInitialValue = 0;
subhanAllahIncrementBtn.addEventListener('click', function(){
    if(subhanAllahInitialValue === 33){
        return alert('Subhan Allah complete, Please fill up another one')
    }
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue
})

subhanAllahDecrementBtn.addEventListener('click', function(){
    if(subhanAllahInitialValue === 0){
        return alert('You can not added negative value')
    }
    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue
})

// ------alhamdulillah start-------
let alhamdulillahInitialValue = 0;
alhamdulillahIncrementBtn.addEventListener('click', function(){
    if(alhamdulillahInitialValue === 33){
        return alert('Alhamdulillah complete, Please fill up another one')
    }
    alhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue
})

alhamdulillahDecrementBtn.addEventListener('click', function(){
    if(alhamdulillahInitialValue === 0){
        return alert('You can not added negative value')
    }
    alhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue
})

// ------alhamdulillah start-------

let allahuAkbarInitialValue = 0;
allahuAkbarIncrementBtn.addEventListener('click', function(){
    if(allahuAkbarInitialValue === 34){
        return alert('Allahu Akbar complete, Please start from "Subhan Allah".')
    }

    allahuAkbarInitialValue += 1;
    allahuAkbarDisplay.innerText = allahuAkbarInitialValue

})

allahuAkbarDecrementBtn.addEventListener('click', function(){
    if(allahuAkbarInitialValue === 0){
        return alert('You can not added negative value')
    }
    allahuAkbarInitialValue -= 1;
    allahuAkbarDisplay.innerText = allahuAkbarInitialValue
})

// ------resetbtn start-------

resetBtn.addEventListener('click', function(){
    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahuAkbarDisplay.innerText = 0;
    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuAkbarInitialValue = 0;
})
