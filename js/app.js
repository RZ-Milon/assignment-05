const cart = [];

function displaySlectedPlayer(addPlayerToCart) {
    const setOlLi = document.getElementById('slected-player-list');
    
    setOlLi.innerHTML = '';

    for (let i = 0; i < addPlayerToCart.length; i++) {

        const name = cart[i].playerName;
        if (i === 5) {
            alert('You already slected five players');
        }
        const ol = document.createElement('ol');
        ol.innerHTML = `
            <li>${name}</li>

            

        `;
        setOlLi.appendChild(ol);
    }
    return setOlLi;
   


    // let button = document.querySelectorAll(".btn-select");
    // button.disabled = true;
    // button.addEventListener(".btn-select", stateHandle);

    // function stateHandle() {
    //     if(document.querySelector(".btn-select")) {
    //         button.disabled = true;
    //     }
    // }
}
function addPlayerToCart(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const allPlayers = {
        playerName: playerName,
    }

    cart.push(allPlayers);

    displaySlectedPlayer(cart)
}



// Budget calculate    


document.getElementById('btn-calculate').addEventListener('click', function () {
    const playerCost = getInputFieldValueById('budget-field');
    const playerExpenses = playerCost * olLength;
    setTextElementValueById('total-player-cost', playerExpenses);
});


document.getElementById('btn-total-expenses').addEventListener('click', function () {
    const allPlayerExpenses = getTextValueById('total-player-cost');
    const managerExpenses = getInputFieldValueById('manager-expenses');
    const coachExpenses = getInputFieldValueById('coach-expenses');
    const totalExpenses = allPlayerExpenses + managerExpenses + coachExpenses;
    setTextElementValueById('total-expenses', totalExpenses);
})