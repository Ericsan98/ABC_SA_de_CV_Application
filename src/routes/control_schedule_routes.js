const express = require('express');
const router = express.Router();
const Empleado = require('../models/employee')

router.get('/', async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
});

router.get('/find/:id', async (req, res) => {
    const empleados = await Empleado.findById(req.params.id);
    res.json(empleados);
});

router.post('/', async (req, res) => {
    const {Nombre,Apellido_Paterno,Apellido_Materno,Puesto,Area,Jefe_Inmediato,Hora_Entrada,
    Hora_Comida,Hora_Salida} = req.body;
    const empleadoNuevo = new Empleado({Nombre,Apellido_Paterno,Apellido_Materno,Puesto,Area,
        Jefe_Inmediato,Hora_Entrada,Hora_Comida,Hora_Salida});
    await empleadoNuevo.save();
    res.json({status: "Empleado agregado"});
});

router.put('/:id', async (req, res) => {
    await Empleado.findByIdAndUpdate({_id: req.params.id}, {
        $set:req.body
    });
    res.json({status: "Empleado actualizado"});
});

router.delete('/:id', async (req, res) => {
    await Empleado.findByIdAndRemove(req.params.id);
    res.json({status: "Empleado eliminado"});
});

module.exports = router;