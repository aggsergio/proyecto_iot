const express = require('express');
const router = express.Router();
const model = require('../model/IoT_proyecto')();

const Valor = require('../model/IoT_proyecto');


router.get('/', async (req, res) => {
    const IoT_proyecto =  await Valor.find();
    console.log(IoT_proyecto);
    res.render('index.ejs',{
        IoT_proyecto
    });
});

router.post('/add1', async (req, res) => {
    const valor = new Valor(req.body);
    await valor.save();
    res.redirect('/');
});

/*router.get('/', async (req, res) => {
    const IoT_proyecto =  await Valor.find();
    console.log(IoT_proyecto);
    res.json(IoT_proyecto);
});*/

router.post('/add', async (req, res) => {
    const valor = new Valor(req.body);
    await valor.save();
    res.json(valor);
});

module.exports = router;