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
    alert('Calling' + ' ' + serviceTitle + ' ' + serviceNumber + '...');


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




