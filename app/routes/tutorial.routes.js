module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    
    var router = require("express").Router();

    //create a new Tutorial
    router.post("/", tutorials.create);

    //retrieve all Tutorials
    router.get("/", tutorials.findAll);

    //Retrieve all published tutorials
    router.get("/published", tutorials.findAllPublished);

    //retrieve a single tutorial with id
    router.get("/:id", tutorials.findOne);

    //Update a Tutorial with id
    router.put("/:id", tutorials.update);

    //delete a tutorial with id
    router.delete("/:id",tutorials.delete);

    //Delete all the tutorials
    router.delete("/",tutorials.deleteAll);

    app.use('/api/tutorials', router);
};
