const path = require('path')
const hbs = require('hbs')
const geocode = require('./public/js/geocode.js')
console.log(__dirname)
//console.log(path.join(__filename,'../'))

// app.get('',(req,res)=>{//1st arg is blank for home page req
// res.send('<h1>Hello!!</h1>')
// })

//Required for express config
const express= require('express')
const app = express()
const port = Process.env.PORT || 3000
app.use(express.static(path.join(__filename,'../Templates/views')))//contents are static and dont change
const Viewspath= (path.join(__filename,'../Templates/views'))//Dynamically assigning view path in Line # 23
const PartialViewspath= (path.join(__filename,'../Templates/partials'))//Dynamically assigning view path in Line # 23

//#region  Partials
hbs.registerPartials(PartialViewspath)

//#endregion

//Used for customizing the folders
//Setting up handle bars for dynamic rendering of web pages
app.set('view engine','hbs')
app.set('views',Viewspath)

//Used by express to display the dynamic content.It searches in the views folder and displays the index page
app.get('',(req,res)=>{

    res.render('index',{
            title:'Arindam',
            name:'Arindam Mallik'
                })   
    })

   app.get('/help',(req,res)=>{

        res.render('help',{
                title:'Arindam_Help_Page',
                name:'Arindam Mallik_Help_Page'
                    })
        
        })

app.get('/products',(req,res)=>{
   if(!req.query.search)//access QueryString Params
   {
       res.send({
            error:'You have not entered'

       })
   }
   else
   {
       res.send(
           {           
              title:'Arindam_Help_Product',
                name:'Arindam Mallik_Help_Product',
                Search : req.query.search
         })}
      })

/**Get the current weather */
app.get('/weather',(req,res)=>{
    if(!req.query.address)//access QueryString Params
    {
        res.send({
             error:'You have not entered address'
 
        })
    }
    else
    {
     geocode(req.query.address,(error,response)=>
        {
            res.send({
                long : (response.long),
                lat : (response.lat),
                Place:req.query.address
    
           })
        })
        }
       })
       
//Sending JSON Data
// app.get('',(req,res)=>{//1st arg is blank for home page req

//     res.send({
        
//         title:'Arindam',
//         name:'Arindam Mallik'
//     })
    
//     })

///Sending HTML Data
app.get('/about',(req,res)=>{

    res.render('about',{
        
                title:'Arindam_About',
                name:'Arindam Mallik_About'
            })
            
            })
//404 Error
app.get('*',(req,res)=>{//provides the route to match

    //renders rge html page
    res.render('404',{
        title:'Page Not Found',
        name:'Arindam Mallik'
            })


})

// //404 Error
// app.get('*/*',(req,res)=>{//1st arg is blank for home page req

//     res.send('404 Internal Page Not Found')
// })

app.listen(port,()=>{

    console.log('I am listenning')
})

// const weatherForm = document.querySelector('form')
// weatherForm.addEventListener('submit',()=>{
//     console.log('On Submit Clicked')


//})