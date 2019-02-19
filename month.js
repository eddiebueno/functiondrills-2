function daysOfMonth(month, leapYear=false){
    month = month.toLowerCase();
    let result = null;
    switch(month){
        case 'january':
        case 'march':
        case 'may':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
            result = `${month} has 31 days`;
            break;
        case 'april':
        case 'june':
        case 'september':
        case 'november':
            result = `${month} has 30 days`;
            break;
        case 'february':
            if (leapYear){
                result = `${month} has 29 days`;
            }else{
                result = `${month} has 28 days`;
            }
    }
    return result;
}

console.log(daysOfMonth('april'));