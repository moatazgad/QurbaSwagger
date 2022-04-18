/**
 * @swagger
 * components:
 *   schemas:
 *     Restaurant:
 *       type: object
 *       required:
 *         - name
 *         - uniqueName
 *         - cuisine
 *         - location
 *         - user_id
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         name:
 *           type: string
 *           description: restaurant's name
 *         uniqueName:
 *           type: string
 *           description: resturant's unique name
 *         cuisine:
 *           type: string
 *           description: restaurant's cuisine
 *         location:
 *           type: Object
 *           description: restaurant's location [by using coordinates (longitude, latitude)]
 *         user_id:
 *           type: Object
 *           description: user_id of the restaurant's creator
 *
 *       example:
 *         id: d5fsadE_sasz
 *         name: McDonalds
 *         uniqueName: Mac
 *         cuisine: Fast Food
 *         location: [100,90]
 *         user_id: 21783y12387y
 *
 */

/**
 * @swagger
 * tags:
 *   name: Restaurants
 *   description: The restaurants managing API
 */

/**
 * @swagger
 * /allRestaurants:
 *   get:
 *     summary: Returns the list of all the restaurants
 *     tags: [Restaurants]
 *     responses:
 *       200:
 *         description: The list of the restaurants
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Restaurant'
 */

/**
 * @swagger
 * /restaurant/{id}:
 *   get:
 *     summary: get the restaurant by id
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: restaurant's id
 *     responses:
 *       200:
 *         description: The restaurant description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 *       404:
 *         description: Could not find restaurant.
 */

/**
 * @swagger
 * /restaurant:
 *   post:
 *     summary: Create a new restaurant
 *     tags: [Restaurants]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     responses:
 *       201:
 *         description: The restaurant was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /getRestaurantByUniqueName/{id}:
 *   get:
 *     summary: get the restaurant by unique name
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: restaurant's unique name
 *     responses:
 *       200:
 *         description: The restaurant description by unique name
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 *       404:
 *         description: Could not find restaurant.
 */

/**
 * @swagger
 * /filterByCuisine:
 *   post:
 *     summary: filter restaurants by certain cuisine
 *     tags: [Restaurants]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     responses:
 *       201:
 *         description: Fetched Restaurants with "cuisine" successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 *       500:
 *         description: Some server error
 *
 *       404:
 *          description: Could not find any restaurant with this cuisine.
 */

/**
 * @swagger
 * /nearRestaurants:
 *   post:
 *     summary: get restaurants that exist within 1 kilometer
 *     tags: [Restaurants]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     responses:
 *       201:
 *         description: Fetched Restaurants successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 *       500:
 *         description: Some server error
 *
 *       404:
 *          description: Could not find any restaurant near this area
 */

/**
 * @swagger
 * /restaurant/{id}:
 *  put:
 *    summary: Update the restaurant by the id
 *    tags: [Restaurants]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the restaurant's id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Restaurant'
 *    responses:
 *      200:
 *        description: restaurant updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Restaurant'
 *      403:
 *        description: Not authorized!
 *      404:
 *        description: Could not find restaurant.
 *      500:
 *        description: Some error happened
 */

/**
 * @swagger
 * /restaurant/{id}:
 *   delete:
 *     summary: Remove the restaurant by id
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The restaurant id
 *
 *     responses:
 *      200:
 *        description: restaurant deleted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Restaurant'
 *      403:
 *        description: Not authorized!
 *      404:
 *        description: Could not find restaurant.
 *      500:
 *        description: Some error happened
 */
