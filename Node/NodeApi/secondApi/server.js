//importing the dependencies
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        "id":"1",
        "text":"Eggs"
    },
    {
        "id":"2",
        "text":"Milk"
    },
    {
        "id":"3",
        "text":"Bacon"
    },
    {
        "id":"4",
        "text":"Frogs Legs"
    }
];

//sends the ingredients list on get() request
app.get('/ingredients', function(request, response) {
    response.send(ingredients);
});

//creating ingredients
app.post('/ingredients', function(request, response) {
    var ingredient = request.body;
    if (!ingredient || ingredient.text === "") {
        response.status(500).send({error: "Your ingredient must have text"});
    } else {
        ingredients.push(ingredient);
        response.status(200).send(ingredients);
    }
});

//updating ingredient list
app.put('/ingredients/:ingredientId', function(request, response) {
    
    var newText = request.body.text;
    
    if (!newText || newText === "") {
        response.status(500).send({error:"You must provide ingredient text"})
    } else {
        var objectFound = false;
        for (var x = 0; x < ingredients.length; x++) {
            var ing = ingredients[x];
            
            if (ing.id === request.params.ingredientId) {
                ingredients[x].text = newText;
                objectFound = true;
                break;
            }
        }
        
        if (!objectFound) {
            response.status(500).send({error:"Ingredient id not found"});
        } else {
            response.send(ingredients);
        }
    }   
});


app.listen(3000, function() {
    console.log("First API running on port 3000!");
});