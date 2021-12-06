// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

//validate credit card numbers using the Luhn algorithm
const validateCred = array => {
    let sum = 0;
    //Build the sum, if i is even, add the value at the current index to sum. If i is odd, multiply the value at the current index by 2; if the newNum is more than 9, subtract 9 and add to sum, otherwise; add numNum as is
    for (let i = array.length - 1; i > -1; i--) {
      if (i % 2 === 1) {
        sum = array[i] + sum;
      }
  
      if (i % 2 === 0) {
        let newNum = array[i] * 2;
        if (newNum > 9) {
          newNum -= 9;
        }
          sum += newNum;
        } 
      }
      //If the sum is evenly divisible by 10, the card is valid, otherwise it's invalid
      if (sum % 10 === 0) {
        return true
      } else {
        return false;
      }
    }


//Accepts an array of credit cards and pushes the invalid cards into a seperate invalidCards array
const findInvalidCards = array => {
    let invalidCards = [];
    array.forEach(element => {
        let valid = validateCred(element);

        if (valid) {
            invalidCards.push(element);
        }
    });

    return invalidCards;
}
 


//Return an array that contains the companies that sold invalid credit cards, companies are identified using the first digit on the credit card
const idInvalidCardCompanies = array => {
    let companies = [];
    const checkIfCompanyIsInArray = (array, string) => {
    if (!array.includes(string)) {
        array.push(string);
    } 
    return array;
}
    array.forEach(arr => {
        switch (arr[0]) {
            case 3:
                checkIfCompanyIsInArray(companies, 'Amex (American Express)');
                break;
            case 4:
                checkIfCompanyIsInArray(companies, 'Visa');
                break;
            case 5:
                checkIfCompanyIsInArray(companies, 'Mastercard');
                break;
            case 6:
                checkIfCompanyIsInArray(companies, 'Discover');
                break;
            default:
                console.log('Company not found!');
                
        }
    })
    return companies;
}



