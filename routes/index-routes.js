const express = require('express');
const router = express.Router();
const http=require("http");

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'Teste Delivery Much',
    version: '1.0.0'
  });
});

router.get('/recipes', (req, res, next) => {
    let keysParam = req.query.i.split(',');
    keysParam.sort();   

    let url="http://www.recipepuppy.com/api/?i="+keysParam.join();
    var req = http.request(url,response=>{       
        if(response.statusCode == 200){            
            response.on('data', d => {
                res.status(200).send({
                    keywords: keysParam,
                    recipes: JSON.parse(d).results
                });
            });
        } else {
            res.status(200).send({
                keywords: keysParam,
                recipes: JSON.parse(d).results
            });
        }   
    });
    req.end();
});

router.get

module.exports = router;