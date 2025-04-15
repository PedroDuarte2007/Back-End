const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const contem = await prisma.contem.create({
            data: req.body
        });
        return res.status(201).json(contem);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const contems = await prisma.contem.findMany();
    return res.json(contems);
}

const readOne = async (req, res) => {
    try {
        const contem = await prisma.contem.findUnique({
            select: {
                id: true,
                quantidade: true,
                valor: true,
                subtotal: true,
                tem: {
                    select: {
                        id: true
                    }
                },
                faz: {
                    select: {
                        id: true
                    }
                },
            },
            where: {
                id: Number(req.params.id)
            }
        });
        return res.json(contem);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const contem = await prisma.contem.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(contem);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.contem.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { create, read, readOne, update, remove };