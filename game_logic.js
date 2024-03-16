let user_score = 0;
let computer_score = 0;

const choices = document.querySelectorAll(".choice");
let message_box = document.querySelector(".result_message");
let scoreOfUser = document.querySelector("#user_score");
let scoreOfComputer = document.querySelector("#computer_score");

const play_game = (user_choice) => {
    let array = ["Rock", "Paper", "Scissors"];
    let random_choice = Math.floor(Math.random() * 3);
    let computer_choice = array[random_choice];
    console.log("The Computer has choosen ", computer_choice);

    let draw_game = () => {
        console.log("Game got Draw...");
    }
    if (user_choice === computer_choice) {
        draw_game();
        message_box.innerText = "Game got Draw...";
        message_box.style.backgroundColor = "#081b31";
    }
    else {
        let user_win = true;
        if (user_choice === "Rock") {
            // computer has either paper or scissor 
            user_win = computer_choice === "Paper" ? false : true;
        }
        else if (user_choice === "Paper") {
            //computer has either rock or scissors
            user_win = computer_choice === "Scissors" ? false : true;
        }
        else {
            //computer has only one option rock
            user_win = computer_choice === "Rock" ? false : true;
        }
        show_winner(user_win);
    }

};

let show_winner = (user_win) => {
    if (user_win) {
        user_score++;
        scoreOfUser.innerText = user_score;
        console.log("Congratulations You win !!!");
        message_box.innerText = "Congratulations You win !!!";
        message_box.style.backgroundColor = "green";
    }
    else {
        computer_score++;
        scoreOfComputer.innerText = computer_score;
        console.log("Oops You Loose... Try again");
        message_box.innerText = "Oops You Loose... Try again";
        message_box.style.backgroundColor = "red";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let user_choice = choice.getAttribute("id");
        console.log("The user had choosen ", user_choice);
        play_game(user_choice);
    });
})
