var quoteCounter = 0;
var cheerSound = new Audio("cheer.wav");

function quote()
{
    var clickSound = new Audio("click.wav");
    clickSound.play();
    var quote = "";
    var quoteSelection = (Math.floor(Math.random() * 100) + 1);
    console.log(quoteSelection);

    if(quoteSelection == 1)
        {
            quote = quoteSelection + ': "Syntax errors, more like, stupid errors >:("';
        }
    if(quoteSelection == 2)
        {
            quote = quoteSelection + ': "Code is love, code is life <3"';
        }
    if(quoteSelection == 3)
        {
            quote = quoteSelection + ': "Time is moving as time goes on c:"';
        }
    if(quoteSelection == 4)
        {
            quote = quoteSelection + ': "Flowers are so pretty :D"';
        }
    if(quoteSelection == 5)
        {
            quote = quoteSelection + ': "If you are right, then you are not wrong :o"'
        }
    if(quoteSelection == 6)
        {
            quote = quoteSelection + ': "Rubber ducks are just ducks, but rubber :)"';
        }
    if(quoteSelection == 7)
        {
            quote = quoteSelection + ': "If you cross first, you are in first :p"';
        }
    if(quoteSelection == 8)
        {
            quote = quoteSelection + ': "The present is happening, like, right now :o"';
        }
    if(quoteSelection == 9)
        {
            quote = quoteSelection + ': "Debug, more like, freebug :p"';
        }
    if(quoteSelection == 10)
        {
            quote = quoteSelection + ': "If I have one wish, I would wish for a wish :]"';
        }
    if(quoteSelection == 11)
        {
            quote = quoteSelection + ': "Exception error, more like, dumb error >:("';
        }
    if(quoteSelection == 12)
        {
            quote = quoteSelection + ': "Cookies taste pretty good... c:"';
        }
    if(quoteSelection == 13)
        {
            quote = quoteSelection + ': "Free stuff is the best stuff (sometimes) :)"';
        }
    if(quoteSelection == 14)
        {
            quote = quoteSelection + ': "Water tastes like water :p"';
        }
    if(quoteSelection == 15)
        {
            quote = quoteSelection + ': "Money-- :c"';
        }
    if(quoteSelection == 16)
        {
            quote = quoteSelection + ': "Javascript is just Java + script :o"';
        }
    if(quoteSelection == 17)
        {
            quote = quoteSelection + ': "C++ just C with a few pluses :]"';
        }
    if(quoteSelection == 18)
        {
            quote = quoteSelection + ': "The moon looks like a banana :p"';
        }
    if(quoteSelection == 19)
        {
            quote = quoteSelection + ': "Java sounds yummy c:"';
        }
    if(quoteSelection == 20)
        {
            quote = quoteSelection + ': "Stars look really really pretty c:"';
        }
    if(quoteSelection == 21)
        {
            quote = quoteSelection + ': "I look up and the sun always shines on my face and it hurts :("';
        }
    if(quoteSelection == 22)
        {
            quote = quoteSelection + ': "Quotes are just quotes within quotes :D"';
        }
    if(quoteSelection == 23)
        {
            quote = quoteSelection + ': "Pythons are scary :c"';
        }
    if(quoteSelection == 24)
        {
            quote = quoteSelection + ': "I love pi and pies :D"';
        }
    if(quoteSelection == 25)
        {
            quote = quoteSelection + ': "Turtles might take over the world :o"';
        }
    if(quoteSelection == 26)
        {
            quote = quoteSelection + ': "Coding is super duper fun :D"';
        }
    if(quoteSelection == 27)
        {
            quote = quoteSelection + ': "2 cookies is better than 1 cookie :p"';
        }
    if(quoteSelection == 28)
        {
            quote = quoteSelection + ': "Sadness is being sad :("';
        }
    if(quoteSelection == 29)
        {
            quote = quoteSelection + ': "Notebook paper has a lot of lines just like my code :D"';
        }
    if(quoteSelection == 30)
        {
            quote = quoteSelection + ': "Free time is the best time :)"';
        }
    if(quoteSelection == 31)
        {
            quote = quoteSelection + ': "Code brings a smile to many faces :]"';
        }
    if(quoteSelection == 32)
        {
            quote = quoteSelection + ': "I love chewy soft gummies :D"';
        }
    if(quoteSelection == 33)
        {
            quote = quoteSelection + ': "Coding is pretty art c:"';
        }
    if(quoteSelection == 34)
        {
            quote = quoteSelection + ': "Having fun while coding is the best :)"';
        }
    if(quoteSelection == 35)
        {
            quote = quoteSelection + ': "Fireflies are like flies with fire inside of them :p"';
        }
    if(quoteSelection == 36)
        {
            quote = quoteSelection + ': "Visual Studio Code, more like, best IDE ever :D"';
        }
    if(quoteSelection == 37)
        {
            quote = quoteSelection + ': "Mirrors are interesting c:"';
        }
    if(quoteSelection == 38)
        {
            quote = quoteSelection + ': "Coconut trees look so nice :D"';
        }
    if(quoteSelection == 39)
        {
            quote = quoteSelection + ': "The sounds of nature are so beautiful... c:"';
        }
    if(quoteSelection == 40)
        {
            quote = quoteSelection + ': "Coding is the best hobby :]"';
        }
    if(quoteSelection == 41)
        {
            quote = quoteSelection + ': "Mochi is so gooddd c:"';
        }
    if(quoteSelection == 42)
        {
            quote = quoteSelection + ': "Easter eggs are awesome :p"';
        }
    if(quoteSelection == 43)
        {
            quote = quoteSelection + ': "Squishy things are so squishy :D"';
        }
    if(quoteSelection == 44)
        {
            quote = quoteSelection + ': "Trees stand tall, me too :p"';
        }
    if(quoteSelection == 45)
        {
            quote = quoteSelection + ': "Funny quote is pretty funny hehe c:"';
        }
    if(quoteSelection == 46)
        {
            quote = quoteSelection + ': "Ducks love to quack :D"';
        }
    if(quoteSelection == 47)
        {
            quote = quoteSelection + ': "Silly things make things sillier c:"';
        }
    if(quoteSelection == 48)
        {
            quote = quoteSelection + ': "I wish for copy and paste to work outside of technology :("';
        }
    if(quoteSelection == 49)
        {
            quote = quoteSelection + ': "Goofing off is amazinggg :D"';
        }
    if(quoteSelection == 50)
        {
            quote = quoteSelection + ': "What if dinosaurs came flying down right now :D"';
        }
    if(quoteSelection == 51)
        {
            quote = quoteSelection + ': "Coding is so silly :p"';
        }
    if(quoteSelection == 52)
        {
            quote = quoteSelection + ': "Computers like to compute c:"';
        }
    if(quoteSelection == 53)
        {
            quote = quoteSelection + ': "French fries are fries but french :o"';
        }
    if(quoteSelection == 54)
        {
            quote = quoteSelection + ': "Limit switches are for limiting :D"';
        }
    if(quoteSelection == 55)
        {
            quote = quoteSelection + ': "Lights are super shiny :]"';
        }
    if(quoteSelection == 56)
        {
            quote = quoteSelection + ': "Talking to animals would be cool :D"';
        }
    if(quoteSelection == 57)
        {
            quote = quoteSelection + ': "My favortie language is cat++ :D"';
        }
    if(quoteSelection == 58)
        {
            quote = quoteSelection + ': "I love eating goldfish, not goldfish :("';
        }
    if(quoteSelection == 59)
        {
            quote = quoteSelection + ': "To be free, you have to be free c:"';
        }
    if(quoteSelection == 60)
        {
            quote = quoteSelection + ': "Coding is fire :p"';
        }
    if(quoteSelection == 61)
        {
            quote = quoteSelection + ': "Morse code is awesome :D"';
        }
    if(quoteSelection == 62)
        {
            quote = quoteSelection + ': "Push and pull :p"';
        }
    if(quoteSelection == 63)
        {
            quote = quoteSelection + ': "Have commitment in your commits c:"';
        }
    if(quoteSelection == 64)
        {
            quote = quoteSelection + ': "Google is always the go-to :)"';
        }
    if(quoteSelection == 65)
        {
            quote = quoteSelection + ': "Git sounds like a fruit :p"';
        }
    if(quoteSelection == 66)
        {
            quote = quoteSelection + ': "Hackathons are amazing :]"';
        }
    if(quoteSelection == 67)
        {
            quote = quoteSelection + ': "Coding is a love language :o"';
        }
    if(quoteSelection == 68)
        {
            quote = quoteSelection + ': "You cannot be the worst if you are not the worst :D"';
        }
    if(quoteSelection == 69)
        {
            quote = quoteSelection + ': "Forgeting the syntax is no big deal (sometimes) :p"';
        }
    if(quoteSelection == 70)
        {
            quote = quoteSelection + ': "Code hard, play hard :o"';
        }
    if(quoteSelection == 71)
        {
            quote = quoteSelection + ': "Teamwork makes the code work :]"';
        }
    if(quoteSelection == 72)
        {
            quote = quoteSelection + ': "SSDs are like HDDs but speedy :D"';
        }
    if(quoteSelection == 73)
        {
            quote = quoteSelection + ': "I love sleeping c:"';
        }
    if(quoteSelection == 74)
        {
            quote = quoteSelection + ': "Scary movies can be scary :c"';
        }
    if(quoteSelection == 75)
        {
            quote = quoteSelection + ': "Live, Laugh, Code :p"';
        }
    if(quoteSelection == 76)
        {
            quote = quoteSelection + ': "Exercise? I thought you said extra fries hahahaha :p"';
        }
    if(quoteSelection == 77)
        {
            quote = quoteSelection + ': "Morse code more like robot language :c"';
        }
    if(quoteSelection == 78)
        {
            quote = quoteSelection + ': "Words are very... wordy :]"';
        }
    if(quoteSelection == 79)
        {
            quote = quoteSelection + ': "Being poor means you are broke :("';
        }
    if(quoteSelection == 80)
        {
            quote = quoteSelection + ': "Blueberry pie tastes like blueberry c:"';
        }
    if(quoteSelection == 81)
        {
            quote = quoteSelection + ': "People are just people :D"';
        }
    if(quoteSelection == 82)
        {
            quote = quoteSelection + ': "Playing with code is fun :D"'
        }
    if(quoteSelection == 83)
        {
            quote = quoteSelection + ': "Colors are so cool :p"';
        }
    if(quoteSelection == 84)
        {
            quote = quoteSelection + ': "Ships can ship ships :o"';
        }
    if(quoteSelection == 85)
        {
            quote = quoteSelection + ': "How many times is too many times :o"';
        }
    if(quoteSelection == 86)
        {
            quote = quoteSelection + ': "Food tastes like food :p"';
        }
    if(quoteSelection == 87)
        {
            quote = quoteSelection + ': "Being unique is being cool :D"';
        }
    if(quoteSelection == 88)
        {
            quote = quoteSelection + ': "An ice cube is just a super tiny water bottle c:"';
        }
    if(quoteSelection == 89)
        {
            quote = quoteSelection + ': "Comedy horror is the silliest :D"';
        }
    if(quoteSelection == 90)
        {
            quote = quoteSelection + ': "Money is green :p"';
        }
    if(quoteSelection == 91)
        {
            quote = quoteSelection + ': "Being silly is a virtue :p"';
        }
    if(quoteSelection == 92)
        {
            quote = quoteSelection + ': "Programmers might have the most patience :D"';
        }
    if(quoteSelection == 93)
        {
            quote = quoteSelection + ': "Does a water hose spit out 1s and 0s :o"';
        }
    if(quoteSelection == 94)
        {
            quote = quoteSelection + ': "Holidays are so sweet :D"';
        }
    if(quoteSelection == 95)
        {
            quote = quoteSelection + ': "Fetch and push :p"';
        }
    if(quoteSelection == 96)
        {
            quote = quoteSelection + ': "Rain is awesome, but sucks at the same time :["';
        }
    if(quoteSelection == 97)
        {
            quote = quoteSelection + ': "Battery power is awesome power c:"';
        }
    if(quoteSelection == 98)
        {
            quote = quoteSelection + ': "Quotes makes more quotes :D"';
        }
    if(quoteSelection == 99)
        {
            quote = quoteSelection + ': "Jump up and down and spin around :D"';
        }
    if(quoteSelection == 100)
        {
            quote = quoteSelection + ': "Sparkles look so pretty and shiny c:"';
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
    if(quoteCounter == 10000)
        {
            document.getElementById("noWay").style.visibility = "visible";
        }
    if(quoteCounter == 100000)
        {
            document.getElementById("okayWhat").style.visibility = "visible";
        }
    if(quoteCounter == 1000000)
        {
            document.getElementById("impossible").style.visibility = "visible";
        }
    if(quoteCounter == 1000000000)
        {
            document.getElementById("moreImpossible").style.visibility = "visible";
        }
    if(quoteCounter == 1000000000000)
        {
            document.getElementById("moreMoreImpossible").style.visibility = "visible";
        }
        
    document.getElementById("insertQuote").innerHTML = quote;
    document.getElementById("counter").innerHTML = quoteCounter;
    cheerSound.play();
}