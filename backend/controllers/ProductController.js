const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getProducts = async (req, res) => {
  try {
    const response = await prisma.product.findMany();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const response = await prisma.product.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createProduct = async (req, res) => {
  const payload = req.body;

  try {
    const product = await prisma.product.create({
      data: payload,
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  const payload = req.body;

  try {
    const product = await prisma.product.update({
      where: {
        id: Number(req.params.id),
      },
      data: payload,
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await prisma.product.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
