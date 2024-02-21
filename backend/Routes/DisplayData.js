

const express = require('express')

const router = express.Router()

// import React from 'react'

router.post("/foodData",async(req,res)=>{
    try {
        
       await res.send([global.food_items,global.food_categories]);
        console.log(global.food_items)
    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }
})

// export default function DisplayData() {
//   return (
//     <div>DisplayData</div>
//   )
// }
module.exports = router;