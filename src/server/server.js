const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.set('port', 3000)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req, res) => {
  console.log('[OK]')
})

app.post('/in', (req, res) => {
  console.log(req.body)
})

app.listen(app.get('port'), () => {
  console.log(`[OK] Server is running on localhost:${app.get('port')}`)
})
