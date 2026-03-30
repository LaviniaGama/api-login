const express = require('express');
const routes = express.Router();
const db = require('../db');
const { routes } = require('../app');


//Get em usuários
routes.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' })
        } else {
            res.json(results)
        }
    });
});

module.exports = routes;