const https= require('https')
const fs = require('fs')


const url = 'https://www.freecodecamp.org/news/build-portfolio-website-react/'

https.get(url,(response)=>{
    let rawdata = ''

    response.on('data',(chunk)=>{
        rawdata += chunk
    })
    response.on('end',()=>{
        const manu = rawdata.slice(0,2000)
        fs.writeFile('output.txt',manu,(err)=>{
            if(err){
                console.log('error on writing',err)
                return;
            }
            console.log('webpage content was written sucessfully')
        });
    }); 
}).on('error',(err)=>{
    console.log('errorfethcing ',err)
});

   