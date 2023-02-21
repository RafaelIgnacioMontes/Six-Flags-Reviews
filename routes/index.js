const { Router } = require('express')
const controllers = require('../Controllers/')
const router = Router()

router.get('/', (req, res) => res.send('DB connected!'))

router.post('/rides', controllers.createRides)

module.exports = router
