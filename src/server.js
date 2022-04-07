import app from './app.js'
import 'dotenv/config'


app.listen(8080, ()=> {
  console.log(`|=============server================|`)
  console.log(` _ Aplicação rodando na porta 8080 _ `)
  console.log(`|=============server================|`)
})
