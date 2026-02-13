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
        "logic":lowStar
    },
    {
        "id":6,
        "rating":1,
        "weight":20,
        "message":"This review is saying less than starval stars.",
        "logic":highStar
    },
    {
        "id":7,
        "rating":1,
        "message":"Don't mention the title.",
        "weight":40,
        "logic":movCheck
    },
    {
        "id":8,
        "message":"Maybe just start from scratch...",
        "weight":20,
        "rating":0
    },
    {
        "id":9,
        "rating":2,
        "message":"7/10 too much water",
        "weight":150,
        "logic":water
    },
    {
        "id":10,
        "message":"Don\'t change a single word.",
        "weight":20,
        "rating":2
    },
    {
        "id":11,
        "message":"I like that you mentioned the title.",
        "weight":40,
        "logic":movCheck,
        "rating":2
    },
    {
        "id":12,
        "message":"Really captures the themes of movval.",
        "weight":20,
        "rating":2,
    },
    {
        "id":13,
        "message":"Yeah, it could probably be better.",
        "rating":1,
        "weight":20
    },
    {
        "id":14,
        "message":"You're such a crude.",
        "rating":0,
        "logic":swearing,
        "weight": 100
    },
    {
        "id":15,
        "message":"Hehe",
        "rating":2,
        "weight":5
    },
    {
        "id":16,
        "message":"You sound so smart in this.",
        "weight":20,
        "rating":2
    },
    {
        "id":17,
        "message":"You sound like an idiot.",
        "weight":20,
        "rating":0
    },
    {
        "id":18,
        "logic":bigWord,
        "message":"Great use of big words.",
        "rating":2,
        "weight":80
    },
    {
        "id":19,
        "logic":bigWord,
        "message":"Stop trying to sound fancy.",
        "rating":1,
        "weight":80
    },
    {
        "id":20,
        "message":"Try putting more thought in next time.",
        "rating":1,
        "weight":20
    },
    {
        "id":21,
        "message":"You cooked with this one.",
        "rating":2,
        "weight":20
    },
    {
        "id":22,
        "message":"This fits so well with movval.",
        "rating":2,
        "weight":20
    },
    {
        "id":23,
        "rating":0,
        "message":"Never post again tbh.",
        "weight":20
    },
    {
        "id":24,
        "message":"Could use some tweaks.",
        "rating":1,
        "weight":20,
    },
    {
        "id":25,
        "message":"I could\'ve done better, and I\'m not real.",
        "rating":0,
        "weight":20
    },
    {
        "id":26,
        "rating":0,
        "weight":20,
        "message":"People will hate you after reading this."
    },
    {
        "id":27,
        "rating":2,
        "message":"My favourite word from this was \"custval.\"",
        "logic":getWord,
        "weight":20
    },
    {
        "id":28,
        "message":"Try to not use \"custval\" next time.",
        "logic":getWord,
        "rating":0,
        "weight":20
    },
    {
        "id":29,
        "message":"Try to not use \"custval\" next time.",
        "logic":getWord,
        "rating":1,
        "weight":20
    },
    {
        "id":30,
        "rating":0,
        "message":"This literally describes any piece of media",
        "weight":20
    },
    {
        "id":31,
        "rating":0,
        "message":"Performative starval star.",
        "weight":20,
    },
    {
        "id":32,
        "rating":2,
        "message":"Yeah, that deserves starval stars",
        "weight":20
    },
    {
        "id":33,
        "rating":1,
        "message":"Needs better prose.",
        "weight":18
    },
    {
        "id":34,
        "rating":2,
        "message":"If it was any better you'd have to publish it.",
        "weight":20
    },
    {
        "id":35,
        "rating":2,
        "message":"My favourite part was when you said \"custval\".",
        "weight":20,
        "logic":getPhrase
    },
    {
        "id":36,
        "rating":2,
        "message":"movval is so overrated.",
        "weight":30,
        "logic":lowerHalf
    },
    {
        "id":37,
        "rating":2,
        "message":"movval is so underrated.",
        "weight":30,
        "logic":higherHalf
    },
    {
        "id":38,
        "rating":2,
        "message":"The director really needed to listen to you.",
        "weight":30,
        "logic":lowerHalf
    },
    {
        "id":39,
        "rating":2,
        "weight":30,
        "logic":higherHalf,
        "message":"You really explained why movval is good."
    },
    {
        "id":40,
        "message":"Too on the fence with starval stars.",
        "rating":1,
        "logic":middleStar,
        "weight":30
    },
    {
        "id":41,
        "message":"end my suffering",
        "weight":1,
        "rating":2,
    },
    {
        "id":42,
        "message":"Out of this world review.",
        "weight":20,
        "rating":2
    },
    {
        "id":43,
        "message":"Autofill would've done better.",
        "rating":0,
        "weight":20
    },
    {
        "id":44,
        "message":"Never touch a keyboard again, actually.",
        "rating":0,
        "weight":20
    },
    {
        "id":45,
        "message":"How do you write so well?",
        "rating":2,
        "weight":20
    },
    {
        "id":46,
        "message":"\"custval\" could be reworded.",
        "rating":1,
        "logic":getPhrase,
        "weight":20
    },
    {
        "id":47,
        "message":"\"custval\" needs to be reworded.",
        "rating":0,
        "logic":getPhrase,
        "weight":20
    },
    {
        "id":48,
        "rating":2,
        "message":"What does custval mean",
        "logic":bigWord,
        "weight":40
    },
    {
        "id":49,
        "message":"Couldn't have said it better myself.",
        "rating":2,
        "weight":20
    },
    {
        "id":50,
        "message":"Be better next time.",
        "rating":1,
        "weight":20
    },
    {
        "id":51,
        "rating":1,
        "message":"I give this review a starval.",
        "logic":middleStar,
        "weight":20
    },
    {
        "id":52,
        "rating":2,
        "message":"I love swear words.",
        "logic":swearing,
        "weight":80
    },
    {
        "id":53,
        "message":"You might be the goat for this one.",
        "rating":2,
        "weight":20
    },
    {
        "id":54,
        "message":"movval DOES deserve starval stars.",
        "rating":2,
        "weight":20
    },
    {
        "id":55,
        "message":"Never cook again.",
        "rating":0,
        "weight":20
    },
    {
        "id":56,
        "message":"PEAK",
        "rating":2,
        "weight":20
    },
    {
        "id":57,
        "rating":0,
        "logic": tooBig,
        "message":"I ain't reading all that.",
        "weight":60
    },
    {
        "id":58,
        "rating":1,
        "message":"Use a synonym for \"custval\"",
        "weight":20,
        "logic":getWord
    },
    {
        "id":59,
        "rating":2,
        "message":"It's not great, but I'm letting you pass.",
        "weight":20
    }
]

var review = '';
var movie = '';
var stars = 0;
var custom = '';
var emojis = [["👍", "✅", "💸", "🥳", "🎉", "🏅", "⭐"], ["😐", "🫤", "🥈", "🤷", "❓"], ["😠", "❌", "💔", "📉", "🥶", "🙅"]];

function lowStar() {return stars < 5}
function lowerHalf() {return stars < 3}
function highStar() {return stars > 0}
function higherHalf() {return stars > 3}
function middleStar() {return stars < 3.5 && stars > 1.5}
function movCheck() {return review.includes(movie)}
function water() {return review.includes("water")}
function swearing() {return ["fuck", "shit", "bitch", "sex", "cunt"].some(word => review.includes(word))}
function bigWord() {custom = review.split(' ').sort(function(a,b){return b.length - a.length})[1]; return (review.split(' ').length > 1 ? review.split(' ').sort(function(a,b){return b.length - a.length})[1].length : 0) > 10}
function getWord() {custom = review.split(' ')[Math.floor(Math.random() * review.split(' ').length)].toLowerCase(); return true}
function getPhrase() {let ran = Math.round(Math.random() * (review.split(' ').length - 3) + 2); custom = review.split(' ')[ran-2] +' '+review.split(' ')[ran-1]+' '+review.split(' ')[ran]; return review.split(' ').length > 3}
function tooBig() {return review.split(' ').length >= 20}