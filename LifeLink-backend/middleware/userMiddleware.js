// middleware to check that a loged in user is a normal user or not 
const userMiddleware = (req, res, next) => {
    
    if(req.user.role !== 'user'){
       res.json({message:"Sorry !, you don't have the access for this "});
    }
    next()
}


// exported this middleware to check the authentication 
module.exports = {userMiddleware}