const jwt=require('jsonwebtoken')
function token()
{
    return {
        getToken(id){
            //Generate token from userid
            const token=jwt.sign({_id:id},"CODEPLAY")
            console.log(token)
            //await user.save()
            return token
    
        }
    }
}

module.exports=token