const express = require('express')
const app = express()

app.use(express.json())
app.use(require('cors')())
app.set('secret','4fodsfg3f90safj0')
require('./plugins/db')(app)
require('./routes/admin/index')(app)
require('./routes/web/index')(app)

app.use('/uploads',express.static(__dirname + '/uploads'))

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})