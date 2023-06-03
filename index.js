const express= require('express');
const path=require('path');
const db=require('./config/mongoose');
const Contact=require('./models/contact');
const port =8000;

const app=express();

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded())
app.use(express.static('assets'))

app.get('/',function(req,res){

    Contact.find({}).then((contacts) => {
        console.log('contacts fetched')
        res.render('home',{
            title: 'My Contact List',
            contact_list: contacts
        })
      }).catch((err) => {
        console.log(err)
      })
    return 
})

app.post('/create-contact',function(req,res){
    //contactList.push(req.body)

    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }).then((result) => {
        console.log('contact added'+result)
        res.redirect('/')
      }).catch((err) => {
        console.log(err)
      })
    
}) 

app.get('/delete-contact/',function(req,res){
    let contactId=req.query.id;
    Contact.findByIdAndDelete(contactId).then((result) => {
        console.log('contact deleted'+result)
        res.redirect('/')
      }).catch((err) => {
        console.log(err)
      })
})

app.listen(port,function(err){
    if(err){
        console.log(err)
        return;
    }else{
        console.log('express server is running at '+port)
    }
})



