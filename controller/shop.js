const Product = require("../models/product");

// exports.getProducts = (req, res, next) => {
//         const products = Product.fetchAll();
//         res.render("shop/product-list", {
//             pageTitle: "All house to rent",
//             prods: products,
//             path: "/shop"
//         });
//     }
exports.getIndex = (req, res, next) => {
        const products = Product.fetchAll();
        res.render("shop/index", {
            pageTitle: "All house to rent",
            prods: products,
            path: "/shop"
        });
    }
    // exports.gerCart = (req, res, next) => {
    //     res.render("shop/cart", {
    //         path: '/cart',
    //         pageTitle: 'My cart'
    //     });
    // };
    // exports.gerCheckout = (req, res, next) => {
    //     res.render("shop/checkout", {
    //         path: '/cart',
    //         pageTitle: 'My cart'
    //     });
    // };