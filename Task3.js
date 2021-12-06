colorLog("TASK №3", "info");
function printSeasonByMonth(month) {
    let season = 'time of year is - ';
    switch (month) {
        case "SEPTEMBER", "NOVEMBER" :
            season += 'autumn';
            break;
        case "DECEMBER", "FEBRUARY" :
            season += 'winter';
            break;
        case 'APRIL', "MAY" :
            season += 'spring';
            break;
        case "JUNE", "JULY", "AUGUST" :
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