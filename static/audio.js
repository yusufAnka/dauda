var anthem = document.querySelector('.anthemAudio')
var particle = document.querySelector('.particle');
var firework = document.querySelector('.firework')

var audioBanner = document.querySelector('.playAudio')

audioBanner.onclick = function(){
    audioBanner.classList.toggle('audioActive')
    particle.innerHTML = `<div class="partContainer">
                            <img class="part1" src="public/img/part1.gif" alt="">
                            <img class="part1_2" src="public/img/part1.gif" alt="">
                            <img class="part2" src="public/img/part2.gif" alt="">
                            <img class="part2_2" src="public/img/part2.gif" alt="">
                            <img class="part2_3" src="public/img/part2.gif" alt="">
                            <img class="part3" src="public/img/part3.gif" alt="">
                            <img class="part3_2" src="public/img/part3.gif" alt="">
                            <img class="part3_3" src="public/img/part3.gif" alt="">
                            <img class="part4" src="public/img/part4.gif" alt="">
                        </div>
                        <h2>New Zamfara is Possible</h2>
                        <p>With Dauda</p>
                        `

    firework.play()
    setTimeout(() => {
        particle.innerHTML = ''
    }, 100);
}
var play = document.getElementById('play')

play.onclick = function(){
    if(this.className == 'fas fa-play-circle'){
        anthem.play()
        this.className = 'fas fa-pause-circle'
    }
    else if(this.className == 'fas fa-pause-circle'){
        anthem.pause()
        this.className = 'fas fa-play-circle'
    }
}


