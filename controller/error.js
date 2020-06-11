exports.getError = (req, res) => {
    res.status(404).render("404", {
        pageTitle: 'Page Error',
        path: "/everything"
    });
}