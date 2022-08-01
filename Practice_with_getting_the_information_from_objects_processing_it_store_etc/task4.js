colorLog('Задача 4', 'info');
function findeUser(initialObject) {
    let userList = Object.entries(initialObject).filter((key)  => {key.age > 18});
    return userList;
}
let obj = {
    Max : {
        age : 21,
        city : "London"
    },
    Roma : {
        age : 19,
        city : "London"
    },
    Jack : {
        age : 17,
        city : "London"
    },
    Yura : {
        age : 24,
        city : "Ternopil"
    }
};
console.log(findeUser(obj));
