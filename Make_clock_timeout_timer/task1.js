let isString = (callbackFunc, value) => {
    if(typeof(callbackFunc)==='function' && typeof(value) === 'string'){
        callbackFunc(value);
    }else{
        console.log('Упссс... 1 аргумент не є функцією або другий не є стрічкою!');
    }
}

const showString = (string) => console.log(string);

isString(showString, 'Сьогодні дуже спекотний день(');