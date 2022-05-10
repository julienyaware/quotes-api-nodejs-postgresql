const express = require('express')
const router = express.Router()

router.get('/',(req,res,next)=>{
    res.json({
        data: [
          {
            quote: 'First, solve the problem. Then, write the code.',
            author: 'John Johnson'
          }
        ],
        meta: {
          page: 1
        }
      })
})