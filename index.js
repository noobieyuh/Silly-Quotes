var quoteCounter = 0;
var cheerSound = new Audio("cheer.wav");

function quote()
{
    var clickSound = new Audio("click.wav");
    clickSound.play();

    var quote = "";

    var quoteSelection = (Math.floor(Math.random() * 50) + 1);
    console.log(quoteSelection);

    if(quoteSelection == 1)
        {
            quote = '"Syntax errors, more like, stupid errors >:("';
        }
    if(quoteSelection == 2)
        {
            quote = '"Code is love, code is life <3"';
        }
    if(quoteSelection == 3)
        {
            quote = '"Time is moving as time goes on c:"';
        }
    if(quoteSelection == 4)
        {
            quote = '"Flowers are so pretty :D"';
        }
    if(quoteSelection == 5)
        {
            quote = '"If you are right, then you are not wrong :o"'
        }
    if(quoteSelection == 6)
        {
            quote = '"Rubber ducks are just ducks, but rubber :)"';
        }
    if(quoteSelection == 7)
        {
            quote = '"If you cross first, you are in first :p"';
        }
    if(quoteSelection == 8)
        {
            quote = '"The present is happening, like, right now :o"';
        }
    if(quoteSelection == 9)
        {
            quote = '"Debug, more like, freebug :p"';
        }
    if(quoteSelection == 10)
        {
            quote = '"If I have one wish, I would wish for a wish :]"';
        }
    if(quoteSelection == 11)
        {
            quote = '"Exception error, more like, dumb error >:("';
        }
    if(quoteSelection == 12)
        {
            quote = '"Cookies taste pretty good... c:"';
        }
    if(quoteSelection == 13)
        {
            quote = '"Free stuff is the best stuff (sometimes) :)"';
        }
    if(quoteSelection == 14)
        {
            quote = '"Water tastes like water :p"';
        }
    if(quoteSelection == 15)
        {
            quote = '"Money-- :c"';
        }
    if(quoteSelection == 16)
        {
            quote = '"Javascript is just Java + script :o"';
        }
    if(quoteSelection == 17)
        {
            quote = '"C++ just C with a few pluses :]"';
        }
    if(quoteSelection == 18)
        {
            quote = '"The moon looks like a banana :p"';
        }
    if(quoteSelection == 19)
        {
            quote = '"Java sounds yummy c:"';
        }
    if(quoteSelection == 20)
        {
            quote = '"Stars look really really pretty c:"';
        }
    if(quoteSelection == 21)
        {
            quote = '"I look up and the sun always shines on my face and it hurts :("';
        }
    if(quoteSelection == 22)
        {
            quote = '"Quotes are just quotes within quotes :D"';
        }
    if(quoteSelection == 23)
        {
            quote = '"Pythons are scary :c"';
        }
    if(quoteSelection == 24)
        {
            quote = '"I love pi and pies :D"';
        }
    if(quoteSelection == 25)
        {
            quote = '"Turtles might take over the world :o"';
        }
    if(quoteSelection == 26)
        {
            quote = '"Coding is super duper fun :D"';
        }
    if(quoteSelection == 27)
        {
            quote = '"2 cookies is better than 1 cookie :p"';
        }
    if(quoteSelection == 28)
        {
            quote = '"Sadness is being sad :("';
        }
    if(quoteSelection == 29)
        {
            quote = '"Notebook paper has a lot of lines just like my code :D"';
        }
    if(quoteSelection == 30)
        {
            quote = '"Free time is the best time :)"';
        }
    if(quoteSelection == 31)
        {
            quote = '"Code brings a smile to many faces :]"';
        }
    if(quoteSelection == 32)
        {
            quote = '"I love chewy soft gummies :D"';
        }
    if(quoteSelection == 33)
        {
            quote = '"Coding is pretty art c:"';
        }
    if(quoteSelection == 34)
        {
            quote = '"Having fun while coding is the best :)"';
        }
    if(quoteSelection == 35)
        {
            quote = '"Fireflies are like flies with fire inside of them :p"';
        }
    if(quoteSelection == 36)
        {
            quote = '"Visual Studio Code, more like, best IDE ever :D"';
        }
    if(quoteSelection == 37)
        {
            quote = '"Mirrors are interesting c:"';
        }
    if(quoteSelection == 38)
        {
            quote = '"Coconut trees look so nice :D"';
        }
    if(quoteSelection == 39)
        {
            quote = '"The sounds of nature are so beautiful... c:"';
        }
    if(quoteSelection == 40)
        {
            quote = '"Coding is the best hobby :]"';
        }
    if(quoteSelection == 41)
        {
            quote = '"Mochi is so gooddd c:"';
        }
    if(quoteSelection == 42)
        {
            quote = '"Easter eggs are awesome :p"';
        }
    if(quoteSelection == 43)
        {
            quote = '"Squishy things are so squishy :D"';
        }
    if(quoteSelection == 44)
        {
            quote = '"Trees stand tall, me too :p"';
        }
    if(quoteSelection == 45)
        {
            quote = '"Funny quote is pretty funny hehe c:"';
        }
    if(quoteSelection == 46)
        {
            quote = '"Ducks love to quack :D"';
        }
    if(quoteSelection == 47)
        {
            quote = '"Silly things make things sillier c:"';
        }
    if(quoteSelection == 48)
        {
            quote = '"I wish for copy and paste to work outside of technology :("';
        }
    if(quoteSelection == 49)
        {
            quote = '"Goofing off is amazinggg :D"';
        }
    if(quoteSelection = 50)
        {
            quote = '"What if dinosaurs came flying down right now :D"';
        }

    quoteCounter += 1;
    if(quoteCounter == 100)
        {
            document.getElementById("firstSecret").style.visibility = "visible";
        }
    if(quoteCounter == 200)
        {
            document.getElementById("secondSecret").style.visibility = "visible";
        }
    if(quoteCounter == 300)
        {
            document.getElementById("thirdSecret").style.visibility = "visible";
        }
    if(quoteCounter == 400)
        {
            document.getElementById("fourthSecret").style.visibility = "visible";
        }
    if(quoteCounter == 500)
        {
            document.getElementById("lastSecret").style.visibility = "visible";
        }
    if(quoteCounter == 1000)
        {
            document.getElementById("actualLastSecret").style.visibility = "visible";
        }
    document.getElementById("insertQuote").innerHTML = quote;
    document.getElementById("counter").innerHTML = quoteCounter;
    cheerSound.play();
}