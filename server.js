const express = require('express')
const app = express()
const router = require('./router.js')
const port = 3000

app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})