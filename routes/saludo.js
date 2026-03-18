import express from "express"

const router = express.Router()


router.post("/saludo", (req, res) => {

    const nombre = req.body.nombre || "mundo"
    console.log(nombre)

    res.json({
        mensaje: `Holis ${nombre}!`,
        ts: Date.now(),
        estado: "ok"
    })
})

export default router