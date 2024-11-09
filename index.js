function quote()
{
    var clickSound = new Audio("click.wav");
    clickSound.play();

    var quote = "";

    var quoteSelection = (Math.floor(Math.random() * 30) + 1);
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



    document.getElementById("insertQuote").innerHTML = quote;
}