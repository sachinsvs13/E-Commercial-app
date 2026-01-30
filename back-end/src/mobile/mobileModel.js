const mongoose = require('mongoose');


const modelSchema = new mongoose.Schema({
    id: { 
        type: Number, 
        required: true 
    },
    phone: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    img: { type: String },
    alt: { type: String },
    color: [{ type: String }],
    storage: { type: String },
    priceTag: { type: String },
    display: { type: String },
    Ram: { type: String },
    cellularTechnology: { type: String },   
    batteryCapacity: { type: String },      
    processor: { type: String },
    processorSpeed: { type: String }
  });

  const phoneSeriesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    model: [modelSchema],
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
  }, 
  { 
    timestamps: true 
});

const phone = mongoose.model('phone', phoneSeriesSchema);

module.exports= phone;