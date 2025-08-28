// love button increase number

let buttons = document.getElementsByClassName("love-btn");


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const loveText = parseInt(document.getElementById('love-text').innerText);
        let updateNumber = loveText + 1;
        document.getElementById('love-text').innerText = updateNumber;

    });



}

// love button increase number end


// call button alert

function setAlert(id1, id2) {
    const serviceTitle = document.getElementById(id1).innerText;
    const serviceNumber = document.getElementById(id2).innerText;
    const gemPoint = parseInt(document.getElementById('gem-point').innerText);
    console.log(gemPoint);
    if (gemPoint < 20) {
        alert('You have no enough gem to call. Please recharge your gem.');
        return;
    }
    alert('Calling' + ' ' + serviceTitle + ' ' + serviceNumber + '...');

    let updateGem = gemPoint - 20;
    document.getElementById('gem-point').innerText = updateGem;

    let now = new Date();

    let time = now.toLocaleTimeString();
    console.log(time);

    // 1. Get parent div
    let parent = document.getElementById("parent-section");

    // 2. Create a new element
    let newCardHistory = document.createElement("div");

    // 3. Add Tailwind classes
    newCardHistory.className = "flex justify-between items-center gap-2 mt-4 bg-slate-100 p-4";

    // 4. Set inner HTML with dynamic values
    newCardHistory.innerHTML = `
        <div>
            <h1 class="text-[16px] lg:text-[18px] my-3 font-semibold">${serviceTitle}</h1>
            <p>${serviceNumber}</p>
        </div>
        <div>
            <p id="current-time">${time}</p>
        </div>
  `;

    // 5. Append into parent
    parent.appendChild(newCardHistory);



}


document.getElementById("call-btn-all").addEventListener("click", function () {
    setAlert('service-title', 'national-number');

});

document.getElementById("call-btn-police").addEventListener("click", function () {
    setAlert('police-hotline-title', 'police-number');

});

document.getElementById("call-btn-fire").addEventListener("click", function () {
    setAlert('fire-service-title', 'fire-service-number');

});

document.getElementById("call-btn-ambulance").addEventListener("click", function () {
    setAlert('ambulance-service-title', 'ambulance-number');

});

document.getElementById("call-btn-child-helpline").addEventListener("click", function () {
    setAlert('child-helpline-title', 'child-helpline-number');

});

document.getElementById("call-btn-anti-corruption").addEventListener("click", function () {
    setAlert('anti-corruption-title', 'anti-corruption-number');

});


document.getElementById("call-btn-electricity-helpline").addEventListener("click", function () {
    setAlert('electricity-helpline-title', 'electricity-helpline-number');
});


document.getElementById("call-btn-brac-helpline").addEventListener("click", function () {
    setAlert('brac-helpline-title', 'brac-helpline-number');

});

document.getElementById("call-btn-railway-helpline").addEventListener("click", function () {
    setAlert('railway-helpline-title', 'railway-helpline-number');

});




