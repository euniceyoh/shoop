const storeName =  document.getElementById('storeInput').value;
const itemName =  document.getElementById('itemInput');
const priority =  document.getElementById('priority').value;
const doneBtn = document.getElementById("doneBtn");

const database = firebase.database();
// const rootRef = database.ref();

doneBtn.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(storeName);
    console.log(itemName);
    var rootRef = database.ref('stores/' + storeName).set({
        item_name : itemName,
        priority : priority
    });
});


const list = document.getElementById('shop-list');

function itemAdded() {
    alert("Item Added");
}

