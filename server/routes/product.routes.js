const ProductController = require("../controllers/product.controller")

module.exports = (app) => {
    app.post("/api/products", ProductController.createProduct)  // add new product
    app.get("/api/products", ProductController.getAllProducts)  // get all products
    app.get("/products/:id",ProductController.getOneProduct)  // get one products
    app.put("/products/:id", ProductController.updateProduct)  // update one product
    app.delete('/products/:id', ProductController.deleteProduct)    /* This is new, delete one Product by _id */
}