const trigger = document.querySelector(".dice__trigger");
const image = document.querySelector(".dice__image");

function randomNumber()
{
    return 1+Math.floor(Math.random()*6);
}

let rot=0;

function flip()
{
    rot+=360*4;
    image.style.transform = "rotateY("+rot+"deg)";
    image.style.transition = "transform .3s";
    return 0;
}

function show()
{
    flip();

    let value = randomNumber();
    //image.src = "image/dice"+value+".png";
    
    if(value==1)
    {
        //image.setAttribute("src","images/dice1.png");
        //image.style.Transform = "rotate(90deg)";
        image.src = "images/dice1.png";
    }

    else if(value==2)
    {
            //image.setAttribute("src","images/dice2.png");
            //image.style.Transform = "rotate(90deg)";
            image.src = "images/dice2.png";

    }

    else if(value==3)
    {
            //image.setAttribute("src","images/dice3.png");
            //image.style.Transform = "rotate(90deg)";
            image.src = "images/dice3.png";

    }

    else if(value==4)
    {
            //image.setAttribute("src","images/dice4.png");
            //image.style.Transform = "rotate(90deg)";
            image.src = "images/dice4.png";

    }

    else if(value==5)
    {
            //image.setAttribute("src","images/dice5.png");
            //image.style.Transform = "rotate(90deg)";
            image.src = "images/dice5.png";

    }

    else if(value==6)
    {
            //image.setAttribute("src","images/dice6.png");
            //image.style.transform = "rotate(90deg)";
            image.src = "images/dice6.png";

    }
}

trigger.addEventListener("click", show);

