const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
alert('Sabia que ibas a decir que si 💕');
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomx = parseInt(Math.random()*800);
    const randomy = parseInt(Math.random()*800);
    noBtn.style.setProperty('top' ,randomy+'%');
    noBtn.style.setProperty('left' ,randomx+'%');
    noBtn.style.setProperty('transform',`translate(-${randomx}%, -${randomy}%)`);

});