(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{13:function(e,t){},14:function(e,t){},15:function(e,t){},6:function(e,t,i){"use strict";i.r(t);var r=i(8),a=i(16),n=i(17),l=i.n(n),s=new r.fabric.Canvas("c",{backgroundColor:"#005835",centeredScaling:!0,enableRetinaScaling:!0,perPixelTargetFind:!0,preserveObjectStacking:!0,selection:!1,allowTouchScrolling:!0,interactive:!0,stopContextMenu:!0,cancelable:!0}),o=new r.fabric.Text("CHO0SE A DESIGN",{fill:"rgb(158, 158, 158)",top:400,left:280,textAlign:"center",fontFamily:"tahoma",fontSize:50,fontWeight:"bold",selectable:!1});s.add(o);o=new r.fabric.Text("Scroll up to select a design and get started.",{fill:"rgb(158, 158, 158)",top:480,left:230,textAlign:"center",fontFamily:"tahoma",fontSize:30,selectable:!1});s.add(o);o=new r.fabric.Text("From Arewa S p a c e.",{fill:"rgb(158, 158, 158)",top:900,left:350,textAlign:"center",fontFamily:"tahoma",fontSize:30,selectable:!1});s.add(o),s.renderAll();var c=document.getElementById("thumbnailContainer"),g=new XMLHttpRequest;g.open("POST","/thumbnail",!0),g.setRequestHeader("Content-type","application/json"),g.set,g.onprogress=()=>{console.log("Waiting....")},g.onerror=()=>{console.log("Something wrong happened!")},g.send(JSON.stringify({preview:{name:"thumbnail"}})),g.onload=()=>{200==g.status?JSON.parse(g.response).forEach(e=>{var t=JSON.parse(e),i=document.createElement("img");i.src=t.project.thumbnail,i.setAttribute("data-name",""+t.project.name),c.appendChild(i)}):console.log("Everything Not sent!")},c.addEventListener("click",e=>{if("IMG"==e.target.tagName&&confirm("Do you want to switch to this design?")){console.log("You confirmed!");var t=new XMLHttpRequest;t.open("POST","/project",!0),t.setRequestHeader("Content-type","application/json"),t.onprogress=()=>{console.log("Waiting....")},t.onerror=()=>{console.log("Something wrong happened!")},t.send(JSON.stringify({project:{name:""+e.target.dataset.name}})),t.onload=()=>{if(200==t.status){var e=JSON.parse(t.response)[0];s.clear(),window.document.head.onload=(s.loadFromJSON(e,s.renderAll.bind(s),(function(e,t){""!=m.value&&"i-text"==t.type&&"Muhammadu Buhari"==t.text&&(t.set("text",m.value).setCoords,s.requestRenderAll()),t.set({transparentCorners:!1,cornerColor:"blue",cornerStrokeColor:"red",borderColor:"red",cornerSize:40,padding:5,cornerStyle:"circle"}),1==t.selectable&&"image"==e.type&&t.setSrc(d.src,s.renderAll.bind(s)).setCoords})).setCoords,void s.requestRenderAll())}else console.log("Everything Not sent!")}}});var p=document.getElementById("filer"),d=document.querySelector(".userPreview");p.onclick=function(){p.oninput=function(e){var t=e.target.files[0],i=new FileReader;i.onload=function(e){s.item(0).setSrc("./public/img/author.png",s.renderAll.bind(s)).setCoords,s.item(0).setSrc(e.target.result,s.renderAll.bind(s)).setCoords,s.item(0).getOriginalSize().width>=8e3?s.item(0).scale(.15).setCoords:s.item(0).getOriginalSize().width>=7e3?s.item(0).scale(.18).setCoords:s.item(0).getOriginalSize().width>=6e3?s.item(0).scale(.2).setCoords:s.item(0).getOriginalSize().width>=5e3?s.item(0).scale(.23).setCoords:s.item(0).getOriginalSize().width>=4e3?s.item(0).scale(.26).setCoords:s.item(0).getOriginalSize().width>=3e3?s.item(0).scale(.28).setCoords:s.item(0).getOriginalSize().width>=2e3?s.item(0).scale(.3).setCoords:s.item(0).getOriginalSize().width>=1e3?s.item(0).scale(.33).setCoords:s.item(0).getOriginalSize().width>=5e3?s.item(0).scale(.38).setCoords:s.item(0).getOriginalSize().width<=5e3&&s.item(0).scale(.5).setCoords,d.src=e.target.result,s.requestRenderAll()},i.readAsDataURL(t)}};var m=document.getElementById("name"),u=document.getElementById("comment");m.oninput=function(){s.item(2).set("text",this.value).setCoords,s.requestRenderAll()},u.oninput=function(){s.item(3).set("text",this.value).setCoords,s.requestRenderAll()},document.querySelector(".scale").oninput=function(){s.item(0).scale(parseFloat(this.value/50)).setCoords,s.requestRenderAll()};var f=document.querySelector(".particle"),b=document.querySelector(".firework");document.getElementById("saveMe").onclick=function(){s.interactive=!1,s.renderAll();var e=s.toDataURL({format:"jpeg",quality:.5,multiplier:.4});l.a.ajax({url:"/",type:"POST",contentType:"application/json",data:JSON.stringify({data:{hoto:e,userFile:`Independence Day ${(new Date).getFullYear()} `}}),success:e=>{console.log("Successfully get data")}}),l()("#c").get(0).toBlob((function(e){Object(a.saveAs)(e,["Independence Day"+(new Date).getFullYear()+"@arewaspace.png"],"/upload/")})),s.interactive=!0,s.renderAll(),f.innerHTML=`<div class="partContainer">\n                            <img class="part1" src="public/img/part1.gif" alt="">\n                            <img class="part1_2" src="public/img/part1.gif" alt="">\n                            <img class="part2" src="public/img/part2.gif" alt="">\n                            <img class="part2_2" src="public/img/part2.gif" alt="">\n                            <img class="part2_3" src="public/img/part2.gif" alt="">\n                            <img class="part3" src="public/img/part3.gif" alt="">\n                            <img class="part3_2" src="public/img/part3.gif" alt="">\n                            <img class="part3_3" src="public/img/part3.gif" alt="">\n                            <img class="part4" src="public/img/part4.gif" alt="">\n                        </div>\n                        <h2><br>INDEPENDENCE DAY!</h2>\n                        <p>${m.value}</p>\n                        `,b.play(),setTimeout(()=>{f.innerHTML=""},4e3)},setInterval(()=>{f.innerHTML='<div class="partContainer">\n                            <img class="part1" src="public/img/part1.gif" alt="">\n                            <img class="part1_2" src="public/img/part1.gif" alt="">\n                            <img class="part2" src="public/img/part2.gif" alt="">\n                            <img class="part2_2" src="public/img/part2.gif" alt="">\n                            <img class="part2_3" src="public/img/part2.gif" alt="">\n                            <img class="part3" src="public/img/part3.gif" alt="">\n                            <img class="part3_2" src="public/img/part3.gif" alt="">\n                            <img class="part3_3" src="public/img/part3.gif" alt="">\n                            <img class="part4" src="public/img/part4.gif" alt="">\n                        </div>\n                        <h2>New Zamfara Is Possible!</h2>\n                        <p>With Dauda</p>\n                        ',b.play(),setTimeout(()=>{f.innerHTML=""},2e3)},2e4)}}]);