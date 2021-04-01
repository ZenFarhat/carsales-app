import express from 'express'

import {deleteAd, getAds, newAd} from '../controllers/ads.js'

const router = express.Router()

router.get('/', getAds)
router.post('/', newAd)
router.delete('/:id', deleteAd)


export default router