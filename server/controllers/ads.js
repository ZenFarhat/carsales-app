import express from 'express'
import mongoose from 'mongoose'

import carAd from '../models/cars.js'


const router = express.Router()

export const getAds = async (req,res) => {
    try {
        const carAds = await carAd.find()
        res.status(200).json(carAds)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

 export const newAd = async (req,res) => {
    const {title, make, year, transmision, cylinders, price, style, image} = req.body
    const newAd = new carAd({title, make, year, transmision, cylinders, price, style, image})

    try {
        await newAd.save()
        res.status(201).json(newAd)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export default router