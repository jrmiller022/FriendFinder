//Dependancies
var friends = require("../data/friends");

// ROUTING
// ===============================================================================

module.exports = function (app) {
    app.get("/api/fiends", function (req, res) {
        res.json(friends);
    })

    // API POST Requests
    app.post("/api/friends", function (req, res) {
        var friendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

        // forloop to run through current friends.
        for (i = 0; i < friends.length; i++) {
            var diff = 0;

            //New scores to compare.
            for (i = 0; i < friendScores.length; i++) {
                diff += (Math.abs(parseInt(friends[i]) - parseInt(friendScores[j])));
                console.log(diff);
            }
            scoresArray.push(diff);
        }
        //best match scores array loop.
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }
        //return bestMatch data
        var newFriend = friendList[bestMatch];
        res.json(newFriend);

        //New adds into the friendsList array
        friendList.push(req.body);
    });
};