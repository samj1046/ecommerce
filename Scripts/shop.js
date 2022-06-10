const list = document.querySelector('.list');
const stock = {
    1: {
        "name": 'dmu jersey',
        "price": '30'
    },
    2: {
        "name": 'g2 jersey',
        "price": '40'
    },
    3: {
        "name": 'c9 jersey',
        "price": '46'
    },
    4: {
        "name": 'all in 1',
        "price": '70'
    },
    5: {
        "name": 'g2 bag',
        "price": '32'
    },
    6: {
        "name": 't1 bag',
        "price": '51'
    },
    7: {
        "name": 't1 hat',
        "price": '15'
    },
    8: {
        "name": 'tsm hat',
        "price": '17'
    },
    9: {
        "name": 'g2 hat',
        "price": '22'
    },
    10: {
        "name": 'dmu hoodie',
        "price": '62'
    },
    11: {
        "name": 'fnc hoodie',
        "price": '71'
    },
    12: {
        "name": 'c9 hoodie',
        "price": '95'
    }
}
let item = [];
let bill = [];

function addToCart(x) {
    const span = `<span class="price">$${stock[x].price}</span>`
    const  result = stock[x].name + " " + span;
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
    btn.innerHTML = `Total Bill is $${total}`;
}