const router = require("express").Router();
const apiRoutes = require("./article");

// "/api/api"
router.use(apiRoutes);

module.exports = router;
