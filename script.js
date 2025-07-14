let button = document.querySelectorAll(".box");
let newgamebtn = document.querySelector(".new");
let resetgamebtn = document.querySelector(".rst");
let message = document.querySelector(".msg-cont");
let msgtext = document.querySelector(".msg")
let player = "true";
let count = 0;
button.forEach((box) => {
    box.addEventListener("click", () => {
        if (player) {
            box.innerText = "X";
            player = false;
        }
        else {
            box.innerText = "O";
            player = true;
        }
        box.disabled = true;
        count++;
        let anywinner = checkwinner();
        if (count == 9 && !anywinner) {
            draw();
        }
        //   console.log("clicked");
        //checkwinner();
    })
})

let resetgame = () => {
    player = "true";
    count = 0;
    enablebutton();
    message.classList.add("w");
}


let win = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8], [8, 4, 0], [6, 4, 2], [2, 1, 0], [5, 4, 3], [8, 7, 6], [6, 3, 0], [7, 4, 1], [8, 5, 2]];

let printwinner = (winner) => {
    msgtext.innerText = `hurray!! winner is ${winner}`;
    message.classList.remove("w");
    disablebutton();
}
let disablebutton = () => {
    for (let box of button) {
        box.disabled = true;
    }
}
let enablebutton = () => {
    for (let box of button) {
        box.disabled = false;
        box.innerText = "";

    }
}

let checkwinner = () => {
    for (let i of win) {

        // console.log(i[0], i[1], i[2]);
        // console.log(button[i[0]].innerText,button[i[1]].innerText,button[i[2]].innerText)

        let val1 = button[i[0]].innerText;
        let val2 = button[i[1]].innerText;
        let val3 = button[i[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                console.log("winner", val1);
                printwinner(val1);
            }
        }

    }
}


resetgamebtn.addEventListener("click", resetgame);
newgamebtn.addEventListener("click", resetgame);


let draw = () => {
    msgtext.innerText = `game is draw`;
    message.classList.remove("w");


}
