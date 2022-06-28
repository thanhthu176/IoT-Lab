let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

// functions nut bam
/*btn1.addEventListener('click', ()=>{
    img1.src = 'img/fan_running.png';
    firebase.database().ref().update({fan: 1}) 
})

btn2.addEventListener('click', ()=>{
    img1.src = 'img/fan_off.png';
    firebase.database().ref().update({fan: 0}) 
})*/

btn1.addEventListener('click', ()=>{
    img2.src = 'img/door_open.jpg';
    firebase.database().ref().update({lock: 1}) 
})

btn2.addEventListener('click', ()=>{
    img2.src = 'img/door_close.jpg';
    firebase.database().ref().update({lock: 0}) 
})

function c1a1(){
    var Stock1 = document.getElementById('stock1');
    var value = Stock1.innerHTML;
    ++value;
    console.log(value);
    document.getElementById('stock1').innerHTML = value;
    firebase.database().ref().child('DMhosp').update({stock: value})
}

function c1s1(){
    var Stock1 = document.getElementById('stock1');
    var value = Stock1.innerHTML;
    if (value==0){then 
        value=value;}
    else {--value;}
    console.log(value);
    document.getElementById('stock1').innerHTML = value;
    firebase.database().ref().child('DMhosp').update({stock: value})
}

function c1a10(){
    var Stock1 = document.getElementById('stock1');
    var value = Stock1.innerHTML;
    value=Number(value)+Number(10);
    console.log(value);
    document.getElementById('stock1').innerHTML = value;
    firebase.database().ref().child('DMhosp').update({stock: value})
}

function c1s10(){
    var Stock1 = document.getElementById('stock1');
    var value = Stock1.innerHTML;
    if (value-10<0){
        then 
        value=value;}
    else {
        value=value-10;}
    console.log(value);
    document.getElementById('stock1').innerHTML = value;
    firebase.database().ref().child('DMhosp').update({stock: value})
}

function c2a1(){
    var Stock2 = document.getElementById('stock2');
    var value = Stock2.innerHTML;
    ++value;
    console.log(value);
    document.getElementById('stock2').innerHTML = value;
    firebase.database().ref().child('DMlorpar').update({stock: value})
}

function c2s1(){
    var Stock2 = document.getElementById('stock2');
    var value = Stock2.innerHTML;
    if (value==0){then 
        value=value;}
    else {--value;}
    console.log(value);
    document.getElementById('stock2').innerHTML = value;
    firebase.database().ref().child('DMlorpar').update({stock: value})
}

function c2a10(){
    var Stock2 = document.getElementById('stock2');
    var value = Stock2.innerHTML;
    value=Number(value)+Number(10);
    console.log(value);
    document.getElementById('stock2').innerHTML = value;
    firebase.database().ref().child('DMlorpar').update({stock: value})
}

function c2s10(){
    var Stock2 = document.getElementById('stock2');
    var value = Stock2.innerHTML;
    if (value-10<0){
        then 
        value=value;}
    else {
        value=value-10;}
    console.log(value);
    document.getElementById('stock2').innerHTML = value;
    firebase.database().ref().child('DMlorpar').update({stock: value})
}

function c3a1(){
    var Stock3 = document.getElementById('stock3');
    var value = Stock3.innerHTML;
    ++value;
    console.log(value);
    document.getElementById('stock3').innerHTML = value;
    firebase.database().ref().child('DMnudy').update({stock: value})
}

function c3s1(){
    var Stock3 = document.getElementById('stock3');
    var value = Stock3.innerHTML;
    if (value==0){then 
        value=value;}
    else {--value;}
    console.log(value);
    document.getElementById('stock3').innerHTML = value;
    firebase.database().ref().child('DMnudy').update({stock: value})
}

function c3a10(){
    var Stock3 = document.getElementById('stock3');
    var value = Stock3.innerHTML;
    value=Number(value)+Number(10);
    console.log(value);
    document.getElementById('stock3').innerHTML = value;
    firebase.database().ref().child('DMnudy').update({stock: value})
}

function c3s10(){
    var Stock3 = document.getElementById('stock3');
    var value = Stock3.innerHTML;
    if (value-10<0) { then 
        value=value;}
    else {value=value-10;}
    console.log(value);
    document.getElementById('stock3').innerHTML = value;
    firebase.database().ref().child('DMnudy').update({stock: value})
}

function c4a1(){
    var Stock4 = document.getElementById('stock4');
    var value = Stock4.innerHTML;
    ++value;
    console.log(value);
    document.getElementById('stock4').innerHTML = value;
    firebase.database().ref().child('DMsend').update({stock: value})
}

function c4s1(){
    var Stock4 = document.getElementById('stock4');
    var value = Stock4.innerHTML;
    if (value==0) { then
        value=value;}
    else {--value;}
    console.log(value);
    document.getElementById('stock4').innerHTML = value;
    firebase.database().ref().child('DMsend').update({stock: value})
}

function c4a10(){
    var Stock4 = document.getElementById('stock4');
    var value = Stock4.innerHTML;
    value=Number(value)+Number(10);
    console.log(value);
    document.getElementById('stock4').innerHTML = value;
    firebase.database().ref().child('DMsend').update({stock: value})
}

function c4s10(){
    var Stock4 = document.getElementById('stock4');
    var value = Stock4.innerHTML;
    if (value-10<0){then 
        value=value;}
    else {value=value-10;}
    console.log(value);
    document.getElementById('stock4').innerHTML = value;
    firebase.database().ref().child('DMsend').update({stock: value})
}

function c5a1(){
    var Stock5 = document.getElementById('stock5');
    var value = Stock5.innerHTML;
    ++value;
    console.log(value);
    document.getElementById('stock5').innerHTML = value;
    firebase.database().ref().child('DMsheou').update({stock: value})
}

function c5s1(){
    var Stock5 = document.getElementById('stock5');
    var value = Stock5.innerHTML;
    if (value==0){then 
        value=value;}
    else {--value;}
    console.log(value);
    document.getElementById('stock5').innerHTML = value;
    firebase.database().ref().child('DMsheou').update({stock: value})
}

function c5a10(){
    var Stock5 = document.getElementById('stock5');
    var value = Stock5.innerHTML;
    value=Number(value)+Number(10);
    console.log(value);
    document.getElementById('stock5').innerHTML = value;
    firebase.database().ref().child('DMsheou').update({stock: value})
}

function c5s10(){
    var Stock5 = document.getElementById('stock5');
    var value = Stock5.innerHTML;
    if (value-10<0){
        then 
        value=value;}
    else {
        value=value-10;}
        console.log(value);
        document.getElementById('stock5').innerHTML = value;
        firebase.database().ref().child('DMsheou').update({stock: value})
}