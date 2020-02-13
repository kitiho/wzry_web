const express = require('express')
const app = express()

app.use(express.json())
app.use(require('cors')())

require('./plugins/db')(app)
require('./routes/admin/index')(app)

app.use('/uploads',express.static('uploads'))

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})