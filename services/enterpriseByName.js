const config = require('../config/enterpriseByName');
const axios = require('axios');
const format = require('../utils/formatData');

const getEnterpriseByName = async (name) => {
    const res = await axios.get(config.enterpriseByName(name));
    const formatedEnterpriseData = format.formatEnterpriseData(res.data)
    return formatedEnterpriseData;
}

const enterpriseParser = async (req,res) => {
    if(!req.query.q){
        return res.status(403).json({error: "Missing enterprise name."});
    }
    const enterpriseData = await getEnterpriseByName(req.query.q);
    return res.status(200).json(enterpriseData);
}

module.exports = {
    enterpriseParser
}