const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')

const url = './data-base/characters.json'

app.use(express.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  app.use(cors())
  next()
})

function write(data){
  fs.writeFileSync(url, JSON.stringify(data))
}

app.get("/characters", (req, res) =>{
  fs.readFile(url, (err, data) => {
    if(err) throw err
    return res.json(JSON.parse(data).characters)
  })
})

app.post("/add-character", (req, res) => {
  const data = JSON.parse(fs.readFileSync(url))
  const proxId = data.characters.length + 1
  req.body['id'] = proxId
  data.characters.push(req.body)
  write(data)
  return res.status(200).json({
    error: false,
    message: "Personagem foi cadastrado com sucesso."
  })
})

app.get("/character/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync(url))
  data.characters.map(char => {
    if(char.id == req.params.id){
      return res.status(200).json(char)
    }
  })
  return res.status(400).json({
    error: true,
    message: 'Personagem não encontrado'
  })
})

app.put("/att-character/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync(url))
  const pos = req.params.id - 1
  const char = data.characters[Number(pos)]
  const reqChar = req.body
  for(property in reqChar){
    if(reqChar[`${property}`] != "" && reqChar[`${property}`] != null){
      char[`${property}`] = reqChar[`${property}`]
    }
  }
  reqChar['id'] = req.params.id
  data.characters[Number(pos)] = reqChar
  write(data)
  return res.status(200).json({
    error: false,
    message: "Personagem foi atualizado com sucesso"
  })
})

app.delete("/delete-character/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync(url))
  const pos = req.params.id - 1
  data.characters.splice(pos, 1)

  for(i in data.characters){
    data.characters[i].id = Number(i) + 1
  }
  
  write(data)
  return res.status(200).json({
    error: false,
    message: "Personagem deletado com sucesso"
  })
})

app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080/")
})