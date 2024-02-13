const bodyParser = require('body-parser')
const app = require("./settings")
const jsonParser = bodyParser.json()

// create application/json parser

app.get("/", (req, res) => {
  res.render("login")
})

app.post("/login", jsonParser, (req, res) => {
  const { username, password } = req.body

  if (!username && !password) {
    res.status(403).json({ status: "error" })
    return
  }

  if (username!=="admin" && password!=="1234") {
    res.status(403).json({ status: "error" })
    return
  }

  res.json({ status: "success" })
})

app.get("/logged", (req, res) => {
  res.render("logged")
})

app.listen(3700,() => console.log(`Servidor rodando na porta ${3700}`));
