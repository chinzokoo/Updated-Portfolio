$(document).ready(function () {
    //functions for materialize
    $(".dropdown-trigger").dropdown({
        alignment: 'left',
        coverTrigger: false,
        inDuration: 200,
        outDuration: 400
    });
    //populating content
    function populateIntro() {
        var introTitle = $("<p id='intro-headText'><span class='green-text'>Hi</span>!</p>");
        var introContent = $("<p id='intro-text'>My name is <span class='blue-text'>Chinzo</span>. <br>I'm a <span class='green-text'>full stack web developer</span>. <br>Welcome to my portfolio site!</p>");
        var introDiv = $("<div class='content'></div>");
        introDiv.attr("value", 1);
        introDiv.append(introTitle).append(introContent);
        return introDiv;
    }

    function populateAbout() {
        var aboutTitle = $("<p id='about-headText'><span class='green-text'>About Me</span>:</p>");
        var aboutContent = $("<p id='about-text'> Allow me to formally introduce myself to you: My name is Chinzorig/Chinzo and I am a man who is passionate about technology, especially in robotics designing and coding is the first step towards my goal. Ever since I was kid, I watched my grandfather work in the fields of electronic engineering. I enjoyed observing his work and I was so fascinated about how technology can be imperative. Although I haven’t finished my studies in Electronic Engineering, I decided pursue my path in Coding. I await the opportunity to pursue an education that allows me to acquire new skills.  I am father of two, husband of one. </p>")
        var aboutDiv = $("<div class='content'></div>");
        aboutDiv.attr("value", 2);
        aboutDiv.append(aboutTitle).append(aboutContent);
        return aboutDiv;
    }

    function populateContact() {
        var contactTitle = $("<p id='contact-headText'><span class='green-text'>Contact</span>:</p>");
        var contactContent1 = $("<p class='contact-text' class='left-align'>Social Media: </p>");
        var contactContent2 = $("<p class='contact-text' class='left-align' style='padding-bottom: 5%'>Email: <br><span class='red-text'><a href='mailto:chinzokoo@gmail.com'>chinzokoo@gmail.com</a></span></p>")
        var imgrow = $("<div class='row'></div>");
        var githubImgDiv=$("<div class='col s6'><a href='https://github.com/chinzokoo' target='_blank'><img class='responsive-img ourImage' src='assets/images/githublogo.jpg'></a></div>");
        var linkedinImgDiv=$("<div class='col s6'><a href='https://www.linkedin.com/in/chinzorig-boldmyagmar-345a6a166/' target='_blank'><img class='responsive-img ourImage' src='assets/images/linkedinlogo.jpg'></a></div>");
        imgrow.append(githubImgDiv).append(linkedinImgDiv);
        var contactDiv = $("<div class='content'></div>");
        contactDiv.attr("value",4);
        contactDiv.append(contactTitle).append(contactContent1).append(imgrow).append(contactContent2);
        return contactDiv;
    }

    function populatePortfolio() {
        var portfolioTitle = $("<p id='portfolio-headText'><span class='green-text'>Portfolio</span>:</p>");
        //make cards from materialize card
        var projcard1 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/matrix.jpg'><span style='font-size:1.40em;' class='card-title white-text blue'>Hangman</span></div><div class='card-content'><p class='card-textcontent'>Guess the Action Movie name, you have only 8 wrong letters to go for, so make it count.</p></div><a style='font-size:1.40em;padding:10px;' class='blue-text' href='https://chinzokoo.github.io/Word-Guess-Game/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/chinzokoo/Word-Guess-Game' target='_blank'>GitHub</a></p></div></div>");
        var projcard2 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/rpg-games.jpg'><span style='font-size:1.40em;' class='card-title white-text blue'>RPG Game</span></div><div class='card-content'><p class='card-textcontent'>Crystal Collector Game, each crystal contain numbers and add them up to get the right number. </p></div><a style='font-size:1.40em;padding:10px;' class='blue-text' href='https://chinzokoo.github.io/unit-4-game/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/chinzokoo/unit-4-game' target='_blank'>GitHub</a></p></div></div>");
        var projcard3 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/triviagames.jpg'><span style='font-size:1.40em;' class='card-title white-text blue'>Trivia Game</span></div><div class='card-content'><p class='card-textcontent'>A timed true and false trivia question game created using JavaScript timeout functions and CSS for design.</p></div><a style='font-size:1.40em;padding:10px;' class='blue-text' href='https://chinzokoo.github.io/TriviaGame/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/chinzokoo/TriviaGame' target='_blank'>GitHub</a></p></div></div>");
        var projcard4 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/lebron.jpg'><span style='font-size:1.40em;' class='card-title white-text blue'>Gif Tastic</span></div><div class='card-content'><p class='card-textcontent'>A web page using the GIPHY API to generate button categories which then generate gifs.</p></div><a style='font-size:1.40em;padding:10px;' class='blue-text' href='https://chinzokoo.github.io/Gif-Tastic/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/chinzokoo/Gif-Tastic' target='_blank'>GitHub</a></p></div></div>");
        var projcard5 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/robot-player.jpeg'><span style='font-size:1.40em;' class='card-title white-text blue'>Rock Paper Scissors </span></div><div class='card-content'><p class='card-textcontent'></p>Next project</div><a style='font-size:1.40em;padding:10px;' class='blue-text' href='https://chinzokoo.github.io/RPS-Multiplayer/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href=' https://github.com/chinzokoo/RPS-Multiplayer' target='_blank'>GitHub</a></p></div></div>");

        var cardrow = $("<div class='row'></div>");
        cardrow.append(projcard1).append(projcard2).append(projcard3);
        var cardrow2 = $("<div class='row'></div>");
        cardrow2.append(projcard4).append(projcard5);
        var portfolioDiv = $("<div class='content'></div>");
        portfolioDiv.attr("value",3);
        portfolioDiv.append(portfolioTitle).append(cardrow);
        portfolioDiv.append(cardrow2);
        return portfolioDiv;
    }

    function changeDiv(cValue,valueNew,newDiv){
        if(cValue != valueNew){
            $("div[value=" + cValue + "]").fadeOut(1000,function(){
                newDiv.fadeIn(500);
            });
        }
    }
    var currentValue = 1;
    var intro = populateIntro();
    var about = populateAbout();
    var portfolio = populatePortfolio();
    var contact = populateContact();
    $("#attachDiv").append(intro).append(about).append(portfolio).append(contact);
    //when user first loads page, only show intro
    
    about.hide();
    portfolio.hide();
    contact.hide();
    //click functions
    $("#homePage").click(function(){
        changeDiv(currentValue,1,intro);
        currentValue = 1;
    })
    $("#topTitle").click(function(){
        $("#homePage").trigger('click');
    })
    $("#aboutPage").click(function(){
        changeDiv(currentValue,2,about);
        currentValue = 2;
    })
    $("#portfolioPage").click(function(){
        changeDiv(currentValue,3,portfolio);
        currentValue = 3;
    })
    $("#contactPage").click(function(){
        changeDiv(currentValue,4,contact);
        currentValue = 4;
    })
})