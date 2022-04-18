/**
 * @swagger
 * components:
 *   schemas:
 *     Client:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - phone
 *         - favoriteCuisines
 *         - restaurants
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         name:
 *           type: string
 *           description: The username
 *         email:
 *           type: string
 *           description: The user's email
 *         password:
 *           type: string
 *           description: The user's password
 *         phone:
 *           type: string
 *           description: The user's phone number
 *         favoriteCuisines:
 *           type: string
 *           description: The user's favorite cuisines
 *         restaurants:
 *           type: string
 *           description: The user's restaurants
 *           example:
 *              id: d5fE_asz
 *              name: Moataz
 *              email: test@test.com
 *              password: testtest
 *              phone: +20123456789
 *              favoriteCuisines: Burger
 *              restaurants: Buffalo Burger
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 *

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: user signup
 *     tags: [Users]
 *     requestBody:
 *      required: true
 *     responses:
 *       201:
 *         description: user's data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Client'
 * 
 * 
 * 
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: user login
 *     tags: [Users]
 *     requestBody:
 *      required: true
 *     responses:
 *       201:
 *         description: user's id and token
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Client'
 *
 *       401:
 *          description: Wrong password
 *
 *       500:
 *         description: Some server error
 *
 */

/**
 * @swagger
 * /clients:
 *   get:
 *     summary: Returns the list of all the clients
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the clients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Client'
 */

/**
 * @swagger
 * /clientsCuisines:
 *   post:
 *     summary: return all clients with certain cuisine (couldnot use $in as it is not available in this MongoDB Atlas tier)
 *     tags: [Users]
 *     responses:
 *       201:
 *         description: return all clients data which has a certain favorite cuisine
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Client'
 *
 */

/**
 * @swagger
 * /clientsCuisinesTwo:
 *   post:
 *     summary: return all clients with certain cuisine
 *     tags: [Users]
 *     responses:
 *       201:
 *         description: return all clients data which has a certain favorite cuisine
 *         content:
 *           application/json:
 *             schema:
 *               type:
 *               items:
 *                 $ref: '#/components/schemas/Client'
 *
 */
