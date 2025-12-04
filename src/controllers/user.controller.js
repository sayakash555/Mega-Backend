import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser = asyncHandler(async(req, res)=>{
    return res.status(500).json({
        message: "user register successfully !!"
    })
})


export {registerUser}