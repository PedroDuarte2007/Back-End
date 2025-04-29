const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Item = require('../models/item');

const create = async (req, res) => {
    try {
        const itemBuilder = new Item(req.body);
        const item = await  prisma.item.create({ data: itemBuilder });
            res.status(201).json(item);
    }catch (e) {
        res.status(500).json(e);
    }
}

const read = async (req, res) => {
    const itens = await prisma.item.findMany();
    res.json(itens);
}

module.exports = {
    create,
    read
}