colorLog("TASK №3", "info");
function printSeasonByMonth(month) {
    let season = 'The month of ' + month + ' is - ';
    switch (month) {
        case "SEPTEMBER" :
        case "OCTOBER"   :
        case "NOVEMBER"  :
            season += 'autumn';
            break;
        case "DECEMBER" :
        case "FEBRUARY" :
        case "JANUARY"  :
            season += 'winter';
            break;
        case 'MARCH' :
        case 'APRIL' :
        case "MAY"   :
            season += 'spring';
            break;
        case "JUNE"   : 
        case "JULY"   : 
        case "AUGUST" :
            season += 'summer'; 
            break;  
        default: 
            season += 'not selected!'; 
    } 
    console.log(season);
   }
    
   printSeasonByMonth("SEPTEMBER");
   printSeasonByMonth("NOVEMBER");
   printSeasonByMonth("JULY");
   printSeasonByMonth("FEBRUARY");
   printSeasonByMonth("APRIL");