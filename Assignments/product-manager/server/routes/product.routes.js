const ProductController = require("../controllers/product.controller")

module.exports = function (app) {
    app.get("/api/products", ProductController.findAllProducts)
    app.get("/api/products/:id", ProductController.findProduct)
    app.put("/api/products/:id/edit", ProductController.updateProduct)
    app.post('/api/products/new', ProductController.createProduct)
    app.delete('/api/products/:id/delete', ProductController.deleteProduct)
}   