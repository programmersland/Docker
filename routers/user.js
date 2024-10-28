
const connection = require("../helper/connection")
const router = require("express").Router();
router.get("/", async(req, res) => {
    try {
        const conx = new connection();
        console.log(await conx.getConnect());
        const { status, message, data:db } = await conx.getConnect();
        
        const collection = db.collection('user');
        const result = await collection.find({}).toArray();
        return res.status(200).json({status: 200, message: "lista de usuarios", data: result})
    } catch (error) {
        return res.status(200).json({ status: 500, message: "Error al lista los usuarios", data: error })
    }
});
router.post("/", async(req, res) => {
    try {
        const conx = new connection();
        const { status, message, data:db } = await conx.getConnect();
        const collection = db.collection('user');
        console.log(req.body);
        
        const result = await collection.insertOne(req.body);
        return res.status(200).json({status: 200, message: "Usuario guardado", data: result})
    } catch (error) {
        return res.status(200).json({ status: 500, message: "Error al guardado el usuario", data: error })
    }
});
module.exports = router;
