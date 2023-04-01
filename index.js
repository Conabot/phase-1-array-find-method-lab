// code your solution here
/*const superbowlWin = record.findLast(({result}) => {
    if (result === 'W'){
        return superbowlWin;
    } else {
        return undefined;
    }
})*/

function superbowlWin(record) {
    const denverWinObj = record.find(({result}) => result === "W" );
    if (denverWinObj) {
      return denverWinObj.year;
    } 
    return undefined;
  
}

