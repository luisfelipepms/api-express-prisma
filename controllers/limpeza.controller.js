const limpeza = require('../services/limpeza.services')
const createError = require('http-errors')

class limpezaController {
    static insert = async (req, res, next) => {
        try {
            const limp = await limpeza.insert(req.body);
            res.status(200).json({
                status: true,
                message: 'Limpeza inserida com sucesso',
                data: limp
            })
        }
        catch (e) {
            res.status(500).json({
                status: true,
                message: e.message
            })
        }
    }

    static all = async (req, res, next) => {
        try {
            const limpezas = await limpeza.all();
            res.status(200).json({
                status: true,
                message: 'All limpezas',
                data: limpezas
            })
        }
        catch (e) {
            res.status(500).json({
                status: true,
                message: e.message
            })
        }
    }

}

module.exports = limpezaController;