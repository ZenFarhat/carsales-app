import mongoose from 'mongoose'

const carSchema = mongoose.Schema({
  title: String,
  make: String,
  year: Number,
  transmision: String,
  cylinders: Number,
  price: Number,
  style: String,
  image: String,
  createdAt: {
      type: Date,
      default: new Date()
  }
  
});

var CarAd = mongoose.model('CarAd', carSchema)

export default CarAd;