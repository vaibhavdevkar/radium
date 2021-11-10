const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/movies' , function (req, res) {
    
   let movies = ['suryvanshi', 'dhoom', 'avenger', 'thor']
   res.send(movies)
    
});

router.get('/movies/:movieIndex' , function (req, res) {
    
    let movies = ['suryvanshi', 'dhoom', 'avenger', 'thor']
    let index = req.params.movieIndex
    let movieAtIndex = movies[index]
   // res.send(movieAtIndex)

   if(index > movies.length){
    res.send("not found")
} else{
    res.send(movieAtIndex)
}

});
*/

router.get('/films', function(req, res){
    let film = [ { "id" : 1 , "name" : "avenger" } ,
    { "id" : 2 , "name" : "thor" }
]
       res.send(film)
    })

router.get('/films/:filmsIndex', function(req, res){
    let film = [ { "id" : 1 , "name" : "avenger" } ,
    { "id" : 2 , "name" : "thor" },
    { "id" : 3 , "name" : "mumbai-pune-mumbai" },
    { "id" : 4 , "name" : "sairat" }

]
   let index = req.params.filmsIndex

   let filmsatIndex  = film[index -1]
      // res.send(filmsatIndex)

      if(index > film.length){
          res.send("not found")
      } else{
          res.send(filmsatIndex)
      }
    })





module.exports = router;