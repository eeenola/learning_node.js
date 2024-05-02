const getAllProducts = async(req , res) => {
    res.status(200).json( {mssg : "I am getAllProducts"});
};

const getAllProductsTesting = async(req , res) => {
    res.status(200).json( {mssg : "I am getAllProductsTesting"});
};

module.exports = {getAllProducts , getAllProductsTesting}

