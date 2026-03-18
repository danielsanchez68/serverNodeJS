import express from "express"
import dotenv from "dotenv"
import saludoRouter from "./routes/saludo.js"

dotenv.config()

const app = express()

// middleware para JSON
app.use(express.json())


app.get("/", (req, res) => {
    res.send('Hola!!!')
})

// rutas
app.use("/api", saludoRouter)

// puerto desde env
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})