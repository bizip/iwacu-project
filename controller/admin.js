const Product = require("../models/product");
exports.getAddproduct = (req, res) => {
    res.render("admin/add-product", {
        pageTitle: 'Add house to rent',
        path: '/add-product'
    });
}
exports.postAddproduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
}