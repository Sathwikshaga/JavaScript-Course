const buttons = document.querySelectorAll(".button");
// console.log(buttons);

const body = document.querySelector("body");

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", function (e) {
        // body.getElementsByClassName()
        // console.log(e);
        if (e.target.id === "grey"||e.target.id === "white"||e.target.id === "blue"||e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
        }
    });
});
