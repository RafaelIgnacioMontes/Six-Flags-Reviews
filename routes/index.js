const { Router } = require('express')
const controllers = require('../Controllers/')
const router = Router()

router.get('/', (req, res) => res.send('DB connected!'))

router.post('/rides', controllers.createRides)

router.get('/rides', controllers.getAllRides)

router.delete('/rides/:id', controllers.deleteRide)

router.post('/rides/:id/review', controllers.createReview)

router.delete('/rides/:id/review/:id', controllers.deleteReview)

router.get('/review/:id', controllers.getReviewById)

module.exports = router
