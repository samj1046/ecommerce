const list = document.querySelector('.list');
const stock = {
    1: {
        "name": 'dmu jersey',
        "price": '30'
    },
    2: {
        "name": 'dmu jersey',
        "price": '30'
    },
    3: {
        "name": 'dmu jersey',
        "price": '30'
    },
    4: {
        "name": 'dmu jersey',
        "price": '30'
    },
    5: {
        "name": 'dmu jersey',
        "price": '30'
    },
    6: {
        "name": 'dmu jersey',
        "price": '30'
    },
    7: {
        "name": 'dmu jersey',
        "price": '30'
    },
    8: {
        "name": 'dmu jersey',
        "price": '30'
    },
    9: {
        "name": 'dmu jersey',
        "price": '30'
    },
    10: {
        "name": 'dmu jersey',
        "price": '30'
    },
    11: {
        "name": 'dmu jersey',
        "price": '30'
    },
    12: {
        "name": 'dmu jersey',
        "price": '30'
    }
}
let item = [];
let bill = [];

function addToCart(x) {
    const span = `<span class="price">££{stock[x].price}</span>`
    const result = stock[x].name + " " + span;
    if (item.includes(stock[x]) === false) item.push(result);
    bill.push(stock[x].price);

}

function cart() {
    list.innerHTML = "";
    for (let i = 0; i < item.length; i++) {
        let text = item[i];
        let listItem = document.createElement("LI");
        listItem.innerHTML = text;
        list.appendChild(listItem);
        listItem.style.textAlign = 'left';
    }
    const btn = document.querySelector('.bill');
    const total = bill.reduce(add);

    function add(accumulator, a) {
        return parseInt(accumulator) + parseInt(a);
    }
    console.log(total);
    btn.innerHTML = `Total Bill is £{total}`;
}