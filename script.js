// generate a ramdom number
const firstrandomnumber=Math.floor(Math.random()*6)+1
// img
const firstdiceimg= 'dice'+firstrandomnumber+'.png';

document.querySelectorAll('img')[0].setAttribute('src',firstdiceimg);

// generate a ramdom number
const secondrandomnumber=Math.floor(Math.random()*6)+1
// img
const seconddiceimg= 'dice'+secondrandomnumber+'.png';

document.querySelectorAll('img')[1].setAttribute('src',seconddiceimg);

if(firstrandomnumber>secondrandomnumber){
    document.querySelector('h1').innerHTML= 'The winner is user 1';

}
else if(firstrandomnumber<secondrandomnumber){
    document.querySelector('h1').innerHTML= 'The winner is user 2';


}

else {
    document.querySelector('h1').innerHTML= "It's a Draw!";
    

}
