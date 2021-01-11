# Techdegree Project 01
 A Random Quote Generator

I am aiming to the Meets Expectations grade.

I added the setInterval method after checking it out on https://www.w3schools.com/jsref/met_win_setinterval.asp, then I realized you had it written on the instructions of the project as well.

-There were some changes I did to the styles.css file:

    1)
    .quote {
    margin-right: 10px;
    }

    Because I realized that the closing quotes were getting out of the container and this helped to avoid this behavior(It did not look balanced).

    2)
    .tags:before {
    content: " - ";
    font-style: normal;
    }

    To add a (-) before every 'tag'.


-Exceeds Expectations grade

    I tried changing the background color of the site, but I just got a bunch of weird behavior. Even though I didn't figure it out, I would like to know how it is possible. Seems like a cool thing to do.

    Here you can have a look at my code.

    let backgroundColor ='';
    const randomValue = () => Math.floor(Math.random() * 256);

    function randomBC(colorVal) {
        const color = `rgb( ${colorVal()}, ${colorVal()}, ${colorVal()} )`;
        return color;
    }
    
    for (let i=0; i < quotes.length; i++){
        backgroundColor += `<body style="background-color: ${randomBC(randomValue)}">${i}</body>`;
        document.querySelector('body').innerHTML = backgroundColor;
    }

    Somehow I could not find the way to access the 'body' section, I only happen to change 'header' and the 'container' box. :'(

Thank you in advance for taking the time to review my project