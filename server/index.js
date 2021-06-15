const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./config/config')
const authRoute = require('./routes/auth.route')
const getRoute = require('./routes/get.route')

const PORT = config.port

const app = express()


app.use(express.json())
app.use(cors())

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/content', getRoute)

const server = async () => {
    try {
        
        app.listen(PORT, ()=>{
            mongoose.connect(config.mongooseLink, 
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                 })
            console.log(`Server was started on port: ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

server()