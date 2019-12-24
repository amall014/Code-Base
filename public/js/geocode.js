const req = require('request')

const geocode = (address,callback)=>
{

const url1 = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiYW1hbGwwMTQyIiwiYSI6ImNrNDlqMXM4ejA1ZGkzbHF4ZTJ3a2h0aWoifQ.WOyQjjundi_H87A2flnJXw&limit=1";

req({url:url1,json:true},(error,response)=>{

    callback('undefined',{
    //req({url:url1,json:true},(error,response)=>{
 long : (response.body.features[0].center[0]),
 lat : (response.body.features[0].center[1])

    })
})
}

module.exports=geocode;