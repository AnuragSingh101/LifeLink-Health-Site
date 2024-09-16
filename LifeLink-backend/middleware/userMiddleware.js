// function to make a authenticated user routes 
const userMiddleware = (req, res, next) => {
    
    if(req.user.role !== 'user'){
       res.json({message:"Sorry !, you don't have the access for this "});
    }
    next()
}

module.exports = {userMiddleware}