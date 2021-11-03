/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
*/

function checkCashRegister(price, cash, cid) {
    // initialize variables
    var status;
    var change = [];
    var owed = cash - price;
    var cidSum = 0;
    // create object with values for each coin
    var values = {
      0: 0.01,
      1: 0.05,
      2: 0.1,
      3: 0.25,
      4: 1,
      5: 5,
      6: 10,
      7: 20,
      8: 100
    }
    // calculate total amount of cash-in-drawer
    for (var i = 0; i < cid.length; i++) {
      cidSum += cid[i][1];
    }
    // set variables for output object keys if change owed is higher than cash-in-drawer
    if (owed > cidSum) {
      status = "INSUFFICIENT_FUNDS";
      change = [];
    }
    //  set variables for output object keys if change owed is equal to cash-in-drawer
    else if (owed == cidSum) {
      status = "CLOSED";
      change = cid;
    }
    // otherwise
    else {
      // calculate change given
      for (var j = cid.length - 1; j >= 0; j--) {
        var changeGiven;
        var changeGivenArr = [];
        if (owed >= cid[j][1]) {
          changeGiven = cid[j][1];
          owed = Number(owed - cid[j][1]).toFixed(2);
          cid[j][1] = 0;
        }
        else {
          changeGiven = owed - (owed % values[j]);
          let oldOwed = owed;
          owed = Number(owed % values[j]).toFixed(2);
          cid[j][1] = cid[j][1] - (oldOwed - owed);
        }
        if (changeGiven != 0) {
            changeGivenArr.push(cid[j][0], changeGiven);
            change.push(changeGivenArr);
        }
      }
      // set variables for output object keys if there's still change owed
      if (owed != 0) {
        status = "INSUFFICIENT_FUNDS";
        change = [];
      }
      // if no more change is owed, set variable for output object key
      else {
        status = "OPEN";
      }
    }
  
    // create output object
    let output = {
      status: status,
      change: change
    }
  
    // return output object
    console.log(output);
    return output;
  }
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);