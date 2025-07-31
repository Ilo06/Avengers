const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../user.json");

function readData() {
    const jsonData = fs.readFileSync(dataPath);
    return JSON.parse(jsonData);
}

function writeData(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

exports.getAllCharacters = (req, res) => {
    try {
        const data = readData();
        res.send(data.characters);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Server error" });
    }
};

exports.createCharacter = (req, res) => {
    try {
        const data = readData();
        const newCharacter = req.body;

        data.characters.push(newCharacter);
        writeData(data);

        res.status(201).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Server error" });
    }
};

exports.getCharacterById = (req, res) => {
    try {
        const data = readData();
        const id = parseInt(req.params.id);
        const character = data.characters.find(c => c.id === id);

        if (!character) {
            return res.status(404).send({ error: "Character not found" });
        }

        res.send(character);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Server error" });
    }
};

exports.updateCharacterById = (req, res) => {
    try {
        const data = readData();
        const id = parseInt(req.params.id);
        const newValue = req.body;

        const index = data.characters.findIndex(c => c.id === id);
        if (index === -1) {
            return res.status(404).send({ error: "Character not found" });
        }

        data.characters[index] = { ...data.characters[index], ...newValue };
        writeData(data);

        res.status(200).send(data.characters);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Server error" });
    }
};

exports.deleteCharacterById = (req, res) => {
    try {
        const data = readData();
        const id = parseInt(req.params.id);

        const index = data.characters.findIndex(c => c.id === id);
        if (index === -1) {
            return res.status(404).send({ error: "Character not found" });
        }

        data.characters.splice(index, 1);
        writeData(data);

        res.status(200).send({
            message: `Character with id ${id} deleted.`,
            characters: data.characters
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Server error" });
    }
};
