(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{5:function(a,i){var c=document.querySelector(".anthemAudio"),t=document.querySelector(".particle"),s=document.querySelector(".firework"),l=document.querySelector(".playAudio");l.onclick=function(){l.classList.toggle("audioActive"),t.innerHTML='<div class="partContainer">\n                            <img class="part1" src="public/img/part1.gif" alt="">\n                            <img class="part1_2" src="public/img/part1.gif" alt="">\n                            <img class="part2" src="public/img/part2.gif" alt="">\n                            <img class="part2_2" src="public/img/part2.gif" alt="">\n                            <img class="part2_3" src="public/img/part2.gif" alt="">\n                            <img class="part3" src="public/img/part3.gif" alt="">\n                            <img class="part3_2" src="public/img/part3.gif" alt="">\n                            <img class="part3_3" src="public/img/part3.gif" alt="">\n                            <img class="part4" src="public/img/part4.gif" alt="">\n                        </div>\n                        <h2>New Zamfara is Possible!</h2>\n                        <p>With Dauda</p>\n                        ',s.play(),setTimeout(()=>{t.innerHTML=""},2e3)},document.getElementById("play").onclick=function(){"fas fa-play-circle"==this.className?(c.play(),this.className="fas fa-pause-circle"):"fas fa-pause-circle"==this.className&&(c.pause(),this.className="fas fa-play-circle")}}}]);