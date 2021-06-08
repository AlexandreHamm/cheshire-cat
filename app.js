let balls = document.getElementsByClassName('ball');

document.onmousemove = function() {

    let x = event.clientX * 90 / window.innerWidth + '%'; // positions sur les axes X & Y respectivement
    let y = event.clientY * 90/ window.innerHeight + '%';

    for(let i = 0; i < 2; i++){
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = 'translate(-' + x + ',-' + y +')' + ' ease-in-out'; // on utilise le transform translate comme pour centrer un élément
    }

    // console.log(x);
    // console.log(y);
}