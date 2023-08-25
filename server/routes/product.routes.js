const ProductController = require("../controllers/product.controller")

module.exports = (app) => {
    app.post("/api/products", ProductController.createProduct)  // add new product
    app.get("/api/products", ProductController.getAllProducts)  // get all products
}