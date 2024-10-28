const mongoose = require('mongoose');


const getCampign = () => {
    res.json({msg : "This function is to get all the details of the nearby Area "})
}


const postCampign = () => {
    res.json({msg : "This function is to post about New campign held in the nearby area"})
}

const updateCampign = () => {
    res.json({msg : "This function is to update previous campaign details"})
}

const deleteCampign = () => {
    res.json({msg : "This function is to delete the campaign that is completed"})
}

module.exports = {getCampign, postCampign, updateCampign, deleteCampign}