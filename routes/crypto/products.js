const express = require('express')
const router = express.Router()
const authenticate = require('../../middlewares/authenticate')
const productsController = require('../../controllers/crypto/productsController')

/**
 * @swagger
 * /crypto/products:
 *   post:
 *     summary: Post product details to Database
 *     tags:
 *       - Crypto
 *     parameters:
 *       - in: body
 *         data: productObject
 *     responses:
 *       201:
 *         description: Product added successfully
 *       409:
 *         description: Product already exists
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errors/unAuthorized'
 *       500:
 *         description: badImplementation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errors/badImplementation'
 */
router.post('/', authenticate, productsController.addNewProduct)

/**
 * @swagger
 * /crypto/products:
 *   get:
 *     summary: Get all product from crypto site
 *     tags:
 *       - Crypto
 *     responses:
 *       200:
 *         description: Product returned successfully
 *       404:
 *         description: Product not found
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errors/unAuthorized'
 *       500:
 *         description: badImplementation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errors/badImplementation'
 */
router.get('/', productsController.getProducts)

/**
 * @swagger
 * /crypto/product/:id:
 *   get:
 *     summary: Get product with id from crypto site
 *     tags:
 *       - Crypto
 *     responses:
 *       200:
 *         description: Product returned successfully
 *       404:
 *         description: Product not found
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errors/unAuthorized'
 *       500:
 *         description: badImplementation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errors/badImplementation'
 */
router.get('/:id', productsController.getProduct)

module.exports = router
