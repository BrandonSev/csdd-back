const usersRouter = require("express").Router();

const { validatePutUser, validatePostUser } = require("../middleware/User");
const { User } = require("../models");

usersRouter.get("/", async (req, res) => {
  try {
    const [results] = await User.findMany();
    res.json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

usersRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [[results]] = await User.findOneById(id);
    if (!results) return res.status(404).send();
    res.json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

usersRouter.post("/", validatePostUser, async (req, res) => {
  try {
    const [result] = await User.createOne(req.userInformation);
    const [[userCreated]] = await User.findOneById(result.insertId);
    return res.status(201).json({
      message:
        "Votre demande à bien été enregistrer, votre compte est en cours de validation, vous serez avertis par mail lors de l'activation de votre compte",
      user: userCreated,
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

usersRouter.put("/:id", validatePutUser, async (req, res) => {
  try {
    const [result] = await User.updateOneById(req.userInformation, req.params.id);
    if (!result) return res.status(404).send();
    const [[user]] = await User.findOneById(req.params.id);
    return res.status(200).json({ message: "Le compte à bien été modifier", user });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

usersRouter.delete("/:id", async (req, res) => {
  try {
    const [result] = await User.deleteOneById(req.params.id);
    if (!result.affectedRows) {
      return res.status(404).send();
    }
    return res.status(204).json({ message: "Le compte à bien été supprimer" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = usersRouter;
