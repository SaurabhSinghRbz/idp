const idp = require('./model');


// get all identity providers
exports.getAllIdp = async (req, res) => {
    try {
        const idps = await idp.find();
        res.status(200).json(idps);
    } catch (error) {
        res.status(500).json(error);
    }
}

// get identity provider by id
exports.getIdpById = async (req, res) => {
    try {
        const idpById = await idp.findById(req.params.id);
        res.status(200).json(idpById);
    } catch (error) {
        res.status(500).json(error);
    }
};

// post identity provider
exports.postIdp = async (req, res) => {
    try {
        const idpPost = await idp.create(req.body);
        res.status(200).json(idpPost);
    } catch (error) {
        res.status(500).json(error);
    }
};