var msg1=document.querySelector("#msg1");
var msg2=document.querySelector("#msg2");
var msg3=document.querySelector("#msg3");
let no_of_guess = 0;
let guessed_num =[];

let result = Math.floor(Math.random()*10);
console.log(result);

function play()
{
    let user_result=document.querySelector("#guess").value;

    if(user_result < 1 || user_result > 10)
    {
        alert('Please Enter the between 1-10');
    }
    else
    {
        guessed_num.push(user_result);
        no_of_guess=no_of_guess+1;

        if(user_result > result)
        {
            msg1.textContent="Your guess is so far";
            msg2.textContent="No of guesses:" + no_of_guess;
            msg3.textContent="Previous guessed numbers:" + guessed_num;
        }
        else if(user_result < result)
        {
            msg1.textContent="Your guess is too low";
            msg2.textContent="No of guesses:" + no_of_guess;
            msg3.textContent="Previous guessed numbers:" + guessed_num;
        }
        else if(user_result == result)
        {
            msg1.textContent="You are the Winner"
            msg2.textContent="The Secret number is :" + result;
            msg3.textContent="No of Guesses :" + no_of_guess + "Guesses";
        }
    }
}