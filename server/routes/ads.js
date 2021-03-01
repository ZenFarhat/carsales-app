import express from 'express'

import {getAds, newAd} from '../controllers/ads.js'

const router = express.Router()

router.get('/', getAds)
router.post('/', newAd)


export default router