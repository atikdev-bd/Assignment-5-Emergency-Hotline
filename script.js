// love button increase number

let buttons = document.getElementsByClassName("love-btn");

let loveCount = parseInt(document.getElementById('love-text').innerText)
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        document.getElementById('love-text').innerText = loveCount++;

    });
}

// love button increase number end