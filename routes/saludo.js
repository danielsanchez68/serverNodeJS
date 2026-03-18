import express from "express"

const router = express.Router()


router.post("/saludo", (req, res) => {

    const nombre = req.body.nombre || "mundo"

    res.json({
        mensaje: `Hola ${nombre}!`,
        estado: "ok"
    })

})

export default router