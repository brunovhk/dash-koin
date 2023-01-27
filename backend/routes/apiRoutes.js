const router = require("express").Router();

const ApiController = require("../controllers/ApiController");

router.get("/crypto", ApiController.getCrypto);

module.exports = router;
