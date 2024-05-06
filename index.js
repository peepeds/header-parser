const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.redirect('api/whoami');
})
app.get('/api/whoami/',(req,res)=>{
    const ipaddress = req.headers['x-forwarded-from'] || req.socket.remoteAddress || req.ip
    const languages = req.headers['accept-language']
    const software = req.headers['user-agent']
    console.log(req.headers);
    res.json({ipaddress,languages,software})
})

app.listen(port,()=>{
    console.log("App is running at port " + port);
})