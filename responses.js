// WHy can I not import json files
// This is just for data
var review = '';
var movie = '';
var stars = 0;
var data = [
    {
        "id":0,
        "rating":2, 
        "weight":20,
        "message":"Literally perfect."
    },
    {
        "id":1, 
        "rating":2,
        "weight":20,
        "message":"10/10, no notes."
    },
    {
        "id":2,
        "rating":2,
        "weight":20,
        "message":"Best review of all time."
    },
    {
        "id":3,
        "rating":0,
        "weight":20,
        "message":"How do you write something this bad?"
    },
    {
        "id":4,
        "rating":1,
        "weight":20,
        "message":"Needs more words."
    },
    {
        "id":5,
        "rating":1,
        "weight":20,
        "message":"This review is saying more than starval stars.",
        "logic":logic1
    },
    {
        "id":6,
        "rating":1,
        "weight":20,
        "message":"This review is saying less than starval stars.",
        "logic":logic2
    }
]

var emojis = [["👍", "✅", "💸", "🥳", "🎉", "🏅", "⭐"], ["😐", "🫤", "🥈", "🤷", "❓"], ["😠", "❌", "💔", "📉", "🥶", "🙅"]];

function logic1() {if (stars < 5) {return true} else {return false}}
function logic2() {if (stars > 0) {return true} else {return false}}