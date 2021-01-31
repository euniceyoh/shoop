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

/*
stores
    -target
        -item name, priority, user    


    -sprouts



*/


// // // Reference data collection
// // var dataRef = firebase.database().ref('data');


// //Listen for form submit
// document.getElementById('itemForm').addEventListener('submit', submitForm);

// function submitForm(e) {
//     e.preventDefault();
    
//     var storeName = getInputVal('storeInput');
//     var itemName = getInputVal('itemInput');
//     var priority = getInputVal('priority');

//     // write to firebase
//     writeData(storeName, itemName, priority);
// }


// function getInputVal(id) {
//     return document.getElementById(id).value;
// }

// // Save data to firebase
// function writeData(storeName, itemName, priority){
//     var newDataRef = dataRef.push();
//     newDataRef.set({
//         storeName : storeInput,
//         itemName : itemInput,
//         priority : priority
//     });
// }