const Product = require("../models/products");

const getAllProducts = async(req , res) => {

    const { company , name , feature , sort , select} = req.query ;
    console.log(" file : products.js ~ line 5 ~ getAllProducts ~ sort" , sort);
    const queryObject = {};

    if (company) {
        queryObject.company = company ;
    }

    if (feature) {
        queryObject.feature = feature;
    }

    if (name) {
        queryObject.name = { $regex : name , $options : "i"};
    }

    let apiData = Product.find(queryObject);

    if(sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    if(select) {
        //let selectFix = select.replace("," , " ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1 ) * limit ;

    apiData = apiData.skip(skip).limit(limit);

    console.log(queryObject);

    const myData = await apiData ;
    res.status(200).json( { myData , nbHits : myData.length});
};

const getAllProductsTesting = async(req , res) => {

    // const myData = await Product.find(req.query).sort('-name -price');
    const myData = await Product.find(req.query);
    res.status(200).json( { myData } );
};

module.exports = {getAllProducts , getAllProductsTesting}

