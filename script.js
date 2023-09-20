function moveDice()
{
    const diceImg = document.getElementById('dice');
    const min =1;
    const max=7;

    const randomNumber = Math.floor(Math.random() *(max-min))+min;

    // console.log(randomNumber);

    switch(randomNumber)
    {
        case 1:
                diceImg.src="dice1.png"
    }
}