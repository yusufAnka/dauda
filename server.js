const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const upload = require('express-fileupload');
const fs = require('fs');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PORT = process.env.PORT || 5000
var app = express()

app.use(upload())
app.use('/public',express.static(path.join(__dirname, 'static')));

app.use(bodyParser.urlencoded({extended: true, limit : '50mb'}));
app.use(bodyParser.json({limit : '50mb'}))

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('index')
})

app.post('/thumbnail', (req,res)=>{

    fs.writeFileSync('./thumbnail.txt', '', ()=>{})
    fs.readdir('./template', (err, files)=>{
        files.forEach((e)=>{
                    
                    var readThumbnail = fs.readFileSync('./template/'+e+'/'+e+'.txt', 'utf8', ()=>{})
                    var readThumbnailStringify = JSON.parse(JSON.stringify(readThumbnail));
                    var readThumbnailParse = JSON.parse(readThumbnailStringify);
                    fs.appendFileSync('./thumbnail.txt', '{"project": { "name": "'+readThumbnailParse.project.name+readThumbnailParse.project.projectID+'", "thumbnail": "'+readThumbnailParse.project.thumbnail+'" , "published": "'+readThumbnailParse.project.published+'"}}'+'\n', ()=>{})                    
       })
       var sendThumbnailRead = fs.readFileSync('./thumbnail.txt', 'utf8', ()=>{})
                        var sendThumbnail = sendThumbnailRead.split('\n')
                        res.send(sendThumbnail)    
     })
})
app.post('/project', (req,res)=>{
    fs.writeFileSync('./project.txt', '', ()=>{})
    fs.readdir('./template', (err, files)=>{
        files.forEach((e)=>{
                    if(e == req.body.project.name){
                    var readThumbnail = fs.readFileSync('./template/'+e+'/'+e+'.txt', 'utf8', ()=>{})
                    var readThumbnailStringify = JSON.parse(JSON.stringify(readThumbnail));
                    var readThumbnailParse = JSON.parse(readThumbnailStringify);
                    fs.appendFileSync('./project.txt', `${JSON.stringify(readThumbnailParse.project.data)}`, ()=>{})                    
                    }
        })
       var sendThumbnailRead = fs.readFileSync('./project.txt', 'utf8', ()=>{})
                        var sendThumbnail = sendThumbnailRead.split('\n')
                        res.send(sendThumbnail)    
     })
})

app.post('/', (req,res)=>{
    var jsonIndaneey = JSON.stringify(req.body.data.jsonData)
fs.writeFile('./jsonCanvas.txt',jsonIndaneey , (e)=>{})


// For Image Names ----> Line 61 --> Line 70   

var namePrefix = Math.floor(Math.random()* 1000)+1
    

fs.appendFileSync('./imageNames.txt', '\n'+'`'+req.body.data.userFile+namePrefix+".png`", (err)=>{
    console.log(err)
})

var readImage = fs.readFileSync('./imageNames.txt', 'utf-8', (err)=>{
    console.log(err)
})

readImageSplit = readImage.split('\n')
//__________________________________________________________________________>>>

//__________________________________________________________________________>>>



//__________________________________________________________________________>>>




//_______________________________________________________________________End--->>
    // console.log(req.body.data.hoto)
    sendName = req.body.data.userFile 
    console.log(req.body.data.userFile);
    var counterLenght = fs.readFileSync('counter.txt', 'utf-8', (err)=>{
        console.log(err)
    })
    counterLenght--
    // console.log(counterLenght)

   
    
    fs.writeFileSync('counter.txt', counterLenght, (e)=>{
        console.log(e)
    })

    var base64Data = req.body.data.hoto.replace(/^data:image\/jpeg;base64,/,"");

            fs.writeFileSync('./upload/'+req.body.data.userFile+namePrefix+".jpeg", base64Data, 'base64', function(err){
                console.log(err)
            })
        
    // res.send("Data have been sent")
    res.send("Your Image is downloaded")
    })

    var myDB = mongoose.createConnection('mongodb+srv://indaneey:indaneey@naija.igae2.mongodb.net/indaneey?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
    myDB.once('open', ()=>{
        console.log("Database is connected. Let get started");
        // myDB.createCollection('user')
    }).on('error',(error)=>{
        console.log("Getting an error: ", error);
    })
    
    app.post('/user', (req,res)=>{
        // console.log(req.body)
        myDB.collection('users').findOne({email:req.body.user.email}).then((me)=>{
            if(me){
                console.log(`Yes we have this email in our database`)
                res.send(`<small>This email <b>${req.body.user.email}</b> is already been registered with Arewaspace. use different email</small>`)
            }else{
    
                myDB.collection('users').insertOne({
                    name: req.body.user.name,
                    phone: parseFloat(req.body.user.phone),
                    city: req.body.user.city,
                    email: req.body.user.email,
                    date: Date()
            
                }).then((result)=>{ console.log(`New Signup with user name: ${req.body.user.name} `)})
                res.send(`<small>Thank you for subscribing to YUMTECH with email address <br> <b>${req.body.user.email}</b></small> `)
            }   
        })
    })

app.listen(PORT, ()=>{
    console.log('Server is running on port 5000')
}
)