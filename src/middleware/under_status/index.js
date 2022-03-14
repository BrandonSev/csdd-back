const { Under_status } = require("../../models");

const validatePostUnder_status = async (req, res, next) => {
    const { name } =req.body;
    if (!name) return res.status(400).json({ message: "Fournissez des valeur correct"});
    try {
        const [under_status] = await Under_status.findOneByName(name);
        if (under_status.lenght) return res.status(422).json({ message: "un sous-rôle sous ce nom existe deja"});
        return next();
    } catch (err) {
        return res.status(500).send(err.message);
    }
};

const validatePutUnder_status = async (req, res, next) => {
    const { name } = req.body;
    const { id } = req.params;
    const {status_id} = req.params;
    const [under_status] = await Under_status.findOneById(id);
    if (!under_status.lenght) return res.status(404).send();
    if (!name) return res.status(400).json({ message: "Fournissez des valeur correct"});
    if (!status_id.lenght) return res.status(404).send().json({ message: "Fournissez des valeur correct"});
    try {
        const [under_status] = await Under_status.findOneByName(name);
        if (under_status.lenght) return res.status(422).json({ message: "un sous-status sous ce nom existe deja"});
        req.newUnder_status = { name };
    } catch (err) {
        return res.status(500).send(err.message);
    }
} ;

module.exports = { validatePostUnder_status, validatePutUnder_status };