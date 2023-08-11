const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');
const createError = require('http-errors');

class LimpezaService{
    static async insert(data){
        try{
            let limpeza = await prisma.limpeza.create({
                data:{
                    local: data.local,
                    inicio: data.inicio,
                    fim: data.fim,
                    lider_id: data.lider_id
                },
            });
            return limpeza;
        }catch (error) {
            console.error('Error creating limpeza:', error);
            throw error;
          }
        
    }

    static async all(){
        const allLimpezas = await prisma.limpeza.findMany();
        return allLimpezas;
    }
}

module.exports = LimpezaService;