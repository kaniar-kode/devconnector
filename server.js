const express = require('express')
const mongoose = require('mongoose')

const posts = require('./routes/api/posts')
const profile = require('./routes/api/profile')
const users = require('./routes/api/users')

const app = express()

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => {
        console.log('MongoDB connected nigga !')
    })
    .catch((err) => {
        console.log(err)
    })

app.get('/', (req, res) => {
    res.send('Hello king of cannabis !')
})


// Use routes
app.use('/api/posts', posts)
app.use('/api/profile', profile)
app.use('/api/users', users)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
