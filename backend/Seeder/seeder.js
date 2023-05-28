const connectDB = require("../config/db");
connectDB();


const medicineData = require("./medicines2");
const reviewData = require("./reviews2");
const orderData = require("./orders2");


const Medicine = require("../models/medicinemodel");
const Review = require("../models/reviewModel");
const Order = require("../models/orderModel");


const importData = async () => {
  try {
        await Medicine.collection.dropIndexes();
        await Order.collection.dropIndexes();

   
        await Medicine.collection.deleteMany({});
        await Review.collection.deleteMany({});
        await Order.collection.deleteMany({});
  

    if (process.argv[2] !== "-d") {
      const reviews = await Review.insertMany(reviewData);
    
      const sampleProducts = medicineData.map((product) => {
        reviews.map((review) => {
          product.reviews.push(review._id);
        });
        return { ...product };
      });
      await Medicine.insertMany(sampleProducts);
      await Order.insertMany(orderData);
  

      console.log("Seeder data imported successfully");
      process.exit();
      return
    }
    console.log("Seeder data deleted successfully");
    process.exit();
  } catch (error) {
    console.error("Error while proccessing seeder data", error);
    process.exit(1);
  }
};
importData();

