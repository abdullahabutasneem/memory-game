
document.addEventListener('DOMContentLoaded', function () {
    // card options
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    let choosenCard = [];
    let choosenCardId = [];
    let cardsWon = [];

    const data = sessionStorage.getItem('key');
    const grid = document.getElementById('game-grid');
    const scoreField = document.getElementById('show-score');
    document.getElementById('show-name').innerText = data;

    let perScore = 10;
    let score = 0;
    // creating a game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            // console.log(i);
            card.addEventListener('click', flipCard);

            grid.appendChild(card);
        }
    }

    // check matching card
    function checkMatchCard() {
        var cards = document.querySelectorAll('img');
        const card1 = choosenCardId[0];
        const card2 = choosenCardId[1];
        if (choosenCard[0] === choosenCard[1]) {
            // alert('You found a match');
            cards[card1].setAttribute('src', 'images/white.png');
            cards[card2].setAttribute('src', 'images/white.png');
            score = parseInt(score) + parseInt(perScore);
            scoreField.innerText = score;
            cardsWon.push(choosenCard);
        } else {
            // alert('Did not match');
            cards[card1].setAttribute('src', 'images/blank.png');
            cards[card2].setAttribute('src', 'images/blank.png');
            if (perScore >= 2) {
                perScore = parseInt(perScore) - 1;
            }
        }
        choosenCard = [];
        choosenCardId = [];
        if (cardsWon.length === cardArray.length / 2) {
            setTimeout(function () {
                alert("You found all!");
            }, 10);
            location.href = "index.html";
        }
    }

    // flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        const img = cardArray[cardId].img;
        const name = cardArray[cardId].name;
        this.setAttribute('src', img);
        choosenCard.push(name);
        choosenCardId.push(cardId);
        if (choosenCardId.length == 2) {
            setTimeout(checkMatchCard, 100);
        }

    }
    createBoard();
})

