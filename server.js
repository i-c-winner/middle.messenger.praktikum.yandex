const  express = require('express')
const app = express()
const port = 3000

// eslint-disable-next-line no-undef
app.use(express.static(__dirname+'/dist/'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
