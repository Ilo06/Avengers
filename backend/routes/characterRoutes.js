const express = require("express");
const router = express.Router();
const controller = require("../controllers/avengersController");


router.get("/characters", controller.getAllCharacters);
router.post("/characters", controller.createCharacter);
router.get("/characters/:id", controller.getCharacterById);
router.put("/characters/:id", controller.updateCharacterById);
router.delete("/characters/:id", controller.deleteCharacterById);

module.exports = router;
