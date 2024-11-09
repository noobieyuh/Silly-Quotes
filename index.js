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

    quoteCounter += 1;
    document.getElementById("insertQuote").innerHTML = quote;
    document.getElementById("counter").innerHTML = quoteCounter;
    cheerSound.play();
}