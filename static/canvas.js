import { fabric} from 'fabric'
import { saveAs } from 'file-saver'
import $ from "jquery";

var canvas = new fabric.Canvas('c', {
    backgroundColor: '#005835',
    centeredScaling: true,
    enableRetinaScaling: true,
    perPixelTargetFind: true,
    preserveObjectStacking: true,
    selection: false,
    allowTouchScrolling: true,
    interactive: true,
    stopContextMenu: true,
    cancelable: true,
    
})
var text = new fabric.Text('CHO0SE A DESIGN', {
    fill: 'rgb(158, 158, 158)',
    top: 400,
    left: 280,
    textAlign: 'center',
    fontFamily: 'tahoma',
    fontSize: 50,
    fontWeight: 'bold',
    selectable: false
})
canvas.add(text)
var text = new fabric.Text('Scroll up to select a design and get started.', {
    fill: 'rgb(158, 158, 158)',
    top: 480,
    left: 230,
    textAlign: 'center',
    fontFamily: 'tahoma',
    fontSize: 30,
    selectable: false
})
canvas.add(text)
var text = new fabric.Text('From Yumtech Gusau.', {
    fill: 'rgb(158, 158, 158)',
    top: 900,
    left: 350,
    textAlign: 'center',
    fontFamily: 'tahoma',
    fontSize: 30,
    selectable: false
})
canvas.add(text)
canvas.renderAll()

// $.ajax({
//     url: '/suggestion',
//     type: 'POST',
//     contentType: 'application/json',
//     data: JSON.stringify({ suggestion :{ name: templateDetail.project.name+templateDetail.project.projectID, category: templateDetail.project.name} }),
//     success: (responce)=>{
//     }
// })  

    var loaderSpace = document.querySelector('.loaderSpace')
    var thumbnailContainer = document.getElementById('thumbnailContainer')

    var xhr = new XMLHttpRequest()
    xhr.open('POST', '/thumbnail' , true)
    xhr.setRequestHeader('Content-type','application/json')
    xhr.set
    xhr.onprogress = ()=>{
        console.log('Waiting....')

    }
    xhr.onerror = ()=>{
        console.log('Something wrong happened!')
    }
    xhr.send(JSON.stringify({preview : {name : 'thumbnail'}}))
    xhr.onload = ()=>{
        if(xhr.status == 200){

            var readThumbnailParse = JSON.parse(xhr.response)
            readThumbnailParse.forEach(element => {
                var parseThumbnail = JSON.parse(element)
                var img = document.createElement('img')
                img.src = parseThumbnail.project.thumbnail
                img.setAttribute('data-name', `${parseThumbnail.project.name}`)
                thumbnailContainer.appendChild(img)
            });
            
        }
        else{
            console.log('Everything Not sent!')
        }
    }

    thumbnailContainer.addEventListener('click', (e)=>{
        if(e.target.tagName == 'IMG'){
            if(confirm('Do you want to switch to this design?')){
                console.log('You confirmed!')
                var xhr1 = new XMLHttpRequest()
                xhr1.open('POST', '/project' , true)
                xhr1.setRequestHeader('Content-type','application/json')
                xhr1.onprogress = ()=>{
                    console.log('Waiting....')
                    loaderSpace.innerHTML = `<div class="loader">
                    <p>l</p>
                    <p>o</p>
                    <p>a</p>
                    <p>d</p>
                    <p>i</p>
                    <p>n</p>
                    <p>g</p>
                </div>
                <p class="loaderText" style="font-size: .5rem; font-weight: bold; font-family: Arial, Helvetica, sans-serif; font-style: italic;">new template...</p>`
                loaderSpace.style.display = 'block'
            }
                xhr1.onerror = ()=>{
                    loaderSpace.innerHTML = `<p style="font-size: .6rem">Something went wrong.<br>Try refreshing this page and check your connection.</p>`
                    loaderSpace.style.display = 'block'
                    console.log('Something wrong happened!')
                }
                xhr1.send(JSON.stringify({project : {name : `${e.target.dataset.name}`}}))
                xhr1.onload = ()=>{
                    if(xhr1.status == 200){
                        loaderSpace.innerHTML = ``
                       loaderSpace.style.display = 'none'
                        var readThumbnailParse = JSON.parse(xhr1.response)
                        var project = readThumbnailParse[0]
                     canvas.clear()
                        function setTemplate(){
                        canvas.loadFromJSON(project, canvas.renderAll.bind(canvas), function(o, object) {
                                        if(userName.value != ''){
                                            if(object.type == 'i-text' && object.text == 'Muhammadu Buhari'){
                                                object.set('text', userName.value).setCoords
                                                canvas.requestRenderAll()
                                            }
                                        }
                                        // if(o.type == 'i-text'){
                                        //     console.log('Yes its text')
                                        // }
                                        // console.log('here is o ',o)
                                        // console.log('here is object ',object)
                                        
                                        // console.log(object)
                                        object.set({
                                            transparentCorners: false,
                                            cornerColor: 'blue',
                                            cornerStrokeColor: 'red',
                                            borderColor: 'red',
                                            cornerSize: 40,
                                            padding: 5,
                                            cornerStyle: 'circle',
                                        })
                                        if(object.selectable == true && o.type == 'image'){
                                            object.setSrc(userPreview.src, canvas.renderAll.bind(canvas)).setCoords
                                        }
                                       
                                       
                        }).setCoords;
                        canvas.requestRenderAll()
                        }
                        window.document.head.onload = setTemplate()
                        
                    }
                    else{
                        console.log('Everything Not sent!')
                    }
                }
            }
        }
    })
   
    var filer = document.getElementById('filer');
    var userPreview = document.querySelector('.userPreview')
    filer.onclick = function(){
        //--------------->>>>>>>> Images Changer <<<<<--------------------					
                                filer.oninput = function (i) {
                                var file = i.target.files[0];
                                
                                var reader = new FileReader();
                                reader.onload = function(file) {
                                canvas.item(0).setSrc('./public/img/author.png', canvas.renderAll.bind(canvas)).setCoords
                                canvas.item(0).setSrc(file.target.result, canvas.renderAll.bind(canvas)).setCoords
                                if(canvas.item(0).getOriginalSize().width >= 8000){
                                    canvas.item(0).scale(.15).setCoords
                                }
                                else if(canvas.item(0).getOriginalSize().width >= 7000){
                                    canvas.item(0).scale(.18).setCoords
                                }
                                else if(canvas.item(0).getOriginalSize().width >= 6000){
                                    canvas.item(0).scale(.2).setCoords
                                }
                                else if(canvas.item(0).getOriginalSize().width >= 5000){
                                    canvas.item(0).scale(.23).setCoords
                                }
                                else if(canvas.item(0).getOriginalSize().width >= 4000){
                                    canvas.item(0).scale(.26).setCoords
                                }
                                else if(canvas.item(0).getOriginalSize().width >= 3000){
                                    canvas.item(0).scale(.28).setCoords
                                }
                                else if(canvas.item(0).getOriginalSize().width >= 2000){
                                    canvas.item(0).scale(.3).setCoords
                                }
                                else if(canvas.item(0).getOriginalSize().width >= 1000){
                                    canvas.item(0).scale(.33).setCoords
                                }
                                else if(canvas.item(0).getOriginalSize().width >= 5000){
                                    canvas.item(0).scale(.38).setCoords
                                }
                                else if(canvas.item(0).getOriginalSize().width <= 5000){
                                    canvas.item(0).scale(.5).setCoords
                                }
                                userPreview.src = file.target.result
                                canvas.requestRenderAll()											
                                }
                                
                                reader.readAsDataURL(file)
                    
                            }
                           
//____________________________________________________END--------------->>>>>
}

var userName = document.getElementById('name');
var userComment = document.getElementById('comment');
 userName.oninput = function(){
     canvas.item(2).set('text', this.value).setCoords
     canvas.requestRenderAll()
 }
userComment.oninput = function(){
    canvas.item(3).set('text', this.value).setCoords
    canvas.requestRenderAll()
}




var scale = document.querySelector('.scale')
scale.oninput = function () {
    canvas.item(0).scale(parseFloat(this.value/50)).setCoords
    canvas.requestRenderAll()
}

var particle = document.querySelector('.particle');
var firework = document.querySelector('.firework')


var saveMe = document.getElementById('saveMe')
saveMe.onclick = function () {
				
    canvas.interactive = false
    canvas.renderAll()

    var base64Info = canvas.toDataURL({
    format: 'jpeg',
    quality: 0.5,
    multiplier: 0.4
});

var uploadFol = '4285/All/'

    $.ajax({
        url: '/',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({data : {hoto : base64Info, userFile : `Independence Day ${new Date().getFullYear() } `} }),
        success: (responce)=>{
            console.log("Successfully get data");
            
        }
    })
    
    $("#c").get(0).toBlob(function(blob){
        
        saveAs(blob, [`${ userName.value + new Date().getFullYear()}` + "@arewaspace.png"], "/upload/")
    }) 

    canvas.interactive = true
    canvas.renderAll()


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
                        <h2>Dauda Is Comming!</h2>
                        <p>${userName.value}</p>
                        `

    firework.play()
    setTimeout(() => {
        particle.innerHTML = ''
    }, 4000);

}

setInterval(() => {
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
                        <h2>New Zamfara is Possible!</h2>
                        <p>With Dauda</p>
                        `

    firework.play()
    setTimeout(() => {
        particle.innerHTML = ''
    }, 2000);
}, 200000);

