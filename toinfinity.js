function beyond(num){
    if (!isFinite(num)){
        console.log('And Beyond!');
    }else if (isFinite(num) && num > 0){
        console.log('To Infinity');
    }else if (isFinite(num) && num < 0){
        console.log('To negative infinity');
    }else if (num === 0){
        console.log('Staying home');
    }
}

beyond(-22);
beyond(0);