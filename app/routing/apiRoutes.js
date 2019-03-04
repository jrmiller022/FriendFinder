//Dependancies
var friends = require("../data/friends");

// ROUTING
module.exports = function (app) {
    app.get("/api/fiends", function (req, res) {
        res.json(friends);
    })

    // API POST Requests

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        var user = req.body;

        // parseInt for scores
        for (var i = 0; i < friends.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        var bestFriendIndex = 0;
        var minimumDiff = 40;

        for (var i = 0; i < friends.length; i++) {
            var totalDiff = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDiff += difference;
            }

            if (totalDiff < minimumDiff) {
                bestFriendIndex = i;
                minimumDiff = totalDiff;
            }
        }

        // Add match, add friends array
        friends.push(user);

        // sending friend match back.
        res.json(friends[bestFriendIndex]);
    });
};