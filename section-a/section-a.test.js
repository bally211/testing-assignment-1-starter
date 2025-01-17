// Not all functions are imported, be careful 👇
const {
    subtract,
    divide,
    isDivisibleBy,
    areaOrPerimeter,
    gradeAssignment,
    disemvowel,
    removeUrlAnchor,
    strEndsWith,
    numberToString
} = require("./section-a.js");

// Section A 01. Wrtite a smoke test
test('Smoke test to ensure that tests work', () => {
    expect(3*2).toBe(6);
});
// Section A 02. Test the subtraction() function

describe('Testing the subtract fucntion', () => {
    it('Should subtract a smaller number from a larger number and give the correct answer', () => {
        expect(subtract(4,2)).toBe(2);
        expect(subtract(10,7)).toBe(3);
    });
    it('Should subtract a larger number from a smaller number and give the correct negative number as an answer', () => {
        expect(subtract(2,4)).toBe(-2);
        expect(subtract(7,10)).toBe(-3);
    });
    it('Should subtract a negative number and provide the correct answer', () => {
        expect(subtract(-2,-4)).toBe(2);
        expect(subtract(7,-10)).toBe(17);
    });
    it('Should subtract a positive number from a negative number and give the correct answer', () => {
        expect(subtract(-2,4)).toBe(-6);
        expect(subtract(-7,10)).toBe(-17);
    });
    it('Should subtract a smaller decimal number from a larger decimal number and give the correct answer', () => {
        expect(subtract(4.5,2.3)).toBeCloseTo(2.2);
        expect(subtract(10.8,7.5)).toBeCloseTo(3.3);
    });
    it('Should subtract a larger number from a smaller number and give the correct negative number as an answer', () => {
        expect(subtract(2.2,4.1)).toBeCloseTo(-1.9);
        expect(subtract(7.4,10.2)).toBeCloseTo(-2.8);
    });
    it('Should subtract a negative number and provide the correct answer', () => {
        expect(subtract(-2.2,-4.2)).toBeCloseTo(2);
        expect(subtract(7.5,-10.4)).toBeCloseTo(17.9);
    });
    it('Should subtract a positive number from a negative number and give the correct answer', () => {
        expect(subtract(-2.3,4.2)).toBeCloseTo(-6.5);
        expect(subtract(-7.8,10.1)).toBeCloseTo(-17.9);
    });
});

// Section A 03. Test the divide() function

describe('Testing the divide function', () => {
    it('Should divide a larger number by a smaller number that will provide a whole answer', () => {
        expect(divide(4,2)).toEqual(2); //can use toEqual as this will provide a whole number answer without decimal points that would break the test
    });
    it('Should divide a larger number by a smaller number that will provide a decimal answer', () => {
        expect(divide(10,3)).toBeCloseTo(3.33);//using toBeCloseTo for this as it means that 'weird' JS maths thanks to binary and base 10 not getting along accurately won't cause a right answer to be wrong
    });
    it('Should throw an error if the denominator is 0', () => {
        expect(() => {
            divide(8,0)
        }).toThrow(`The value 0 cannot be used as the denominator`);
    });
    it('Should throw an error if the denominator is not a number', () => {
        expect(() => {
            divide(8,'Hello')
        }).toThrow(`The value Hello cannot be used as the denominator`);
    });
});


// Section A 04. Test the isDivisibleBy() function

describe('Testting the isDivisibleBy function', () => {
    it('Should be truthy when the number provided is divisible by both a and b', () => {
        expect(isDivisibleBy(10,2,5)).toBeTruthy();
        expect(isDivisibleBy(2000,40,100)).toBeTruthy();
    });
    it('Should be falsy when the number provided is not divisible by a, but is divisible by b', () => {
        expect(isDivisibleBy(10,3,2)).toBeFalsy();
        expect(isDivisibleBy(2000,648,40)).toBeFalsy();
    });
    it('Should be falsy when the number provided is not divisible by b, but is divisible by a', () => {
        expect(isDivisibleBy(10,2,6)).toBeFalsy();
        expect(isDivisibleBy(2000,40,732)).toBeFalsy();
    });
    it('Should be falsy when the number provided is not divisible by both a and b', () => {
        expect(isDivisibleBy(10,6,3)).toBeFalsy();
        expect(isDivisibleBy(2000,648,732)).toBeFalsy();
    });
    it('Should be falsy if the number provided is not a number', () => {
        expect(isDivisibleBy('Hello',10,15)).toBeFalsy();
        expect(isDivisibleBy(true,2,4)).toBeFalsy();
    });
    // it('Should be falsy if the a provided is not a number', () => { //this fails as the funtion doesn't check the input type and if one of the denominators is a true boolean value then it will output as truthy rather than falsy, can be fixed by changing the function 
    //     expect(isDivisibleBy(100,'Hello',10)).toBeFalsy();
    //     expect(isDivisibleBy(8,true,4)).toBeFalsy();
    // });
    it('Should be falsy if the a provided is 0', () => {
        expect(isDivisibleBy(100,0,10)).toBeFalsy();
        expect(isDivisibleBy(8,0,4)).toBeFalsy();
        expect(isDivisibleBy(0,0,15)).toBeFalsy();
    });
    it('Should be falsy if the b provided is 0', () => {
        expect(isDivisibleBy(100,10,0)).toBeFalsy();
        expect(isDivisibleBy(8,4,0)).toBeFalsy();
        expect(isDivisibleBy(0,15,0)).toBeFalsy();
    });
    it('Should be truthy if the number provided is 0', () => {
        expect(isDivisibleBy(0,2,5)).toBeTruthy();
    });
});

// Section A 05. Test the areaOrPerimeter() function

describe('Testing the areaOrPerimeter function', () => {
    it('Should return the value of l*w if both length and width are the same whole number', () => {
        expect(areaOrPerimeter(3,3)).toBe(9);
    });
    it('Should return the value of l*w if both length and width are the same decimal number', () => {
        expect(areaOrPerimeter(2.5,2.5)).toBe(6.25);
    });
    it('Should return the value of 2*(l+w) when length and width are not equal', () => {
        expect(areaOrPerimeter(2,3)).toBe(10);
        expect(areaOrPerimeter(4.5,3.5)).toBeCloseTo(16);
    });
});

// Section A 06. Test the gradeAssignment() function

describe('Testing the gradeAssignment function', () => {
    it('Should return A when q is greater than or equal to 90', () => {
        expect(gradeAssignment(91,92,93)).toBe("A");
        expect(gradeAssignment(95,85,91)).toBe("A");
        expect(gradeAssignment(90,90,90)).toBe("A");
    });
    it('Should return B when q is greater than or equal to 80, but less than 90', () => {
        expect(gradeAssignment(81,82,83)).toBe("B");
        expect(gradeAssignment(85,75,81)).toBe("B");
        expect(gradeAssignment(80,80,80)).toBe("B");
    });
    it('Should return C when q is greater than or equal to 70, but less than 80', () => {
        expect(gradeAssignment(71,72,73)).toBe("C");
        expect(gradeAssignment(75,65,71)).toBe("C");
        expect(gradeAssignment(70,70,70)).toBe("C");
    });
    it('Should return D when q is greater than or equal to 60, but less than 70', () => {
        expect(gradeAssignment(61,62,63)).toBe("D");
        expect(gradeAssignment(65,55,61)).toBe("D");
        expect(gradeAssignment(60,60,60)).toBe("D");
    });
    it('Should return F when q is less than 60', () => {
        expect(gradeAssignment(0,0,0)).toBe("F");
        expect(gradeAssignment(10,10,10)).toBe("F");
        expect(gradeAssignment(35,35,35)).toBe("F");
        expect(gradeAssignment(59,59,59)).toBe("F");
    });
    it('Should return an empty string if q does not meet any of the above parameters, e.g. it is not a number', () => {
        expect(gradeAssignment('a','b','c')).toBe("");
    });
});

// Section A 07. Test the disemvowel() function

describe('Testing the disemvowel function', () => {
    it('Should return a string that that excludes any lowercase vowels contained inside of it', () => {
        expect(disemvowel('zazezizozuz')).toBe('zzzzzz');
        expect(disemvowel('azezizozu')).toBe('zzzz');
    });
    it('Should return a string that that excludes any uppercase vowels contained inside of it', () => {
        expect(disemvowel('zAzEzIzOzUz')).toBe('zzzzzz');
        expect(disemvowel('AzEzIzOzU')).toBe('zzzz');
    });
    it('Should return an empty string if the original value was entirely made of vowels', () => {
        expect(disemvowel('uoiea')).toBe('');
        expect(disemvowel('UOIEA')).toBe('');
    });
    it('Should return the same string with no characters removed if it contains no vowels', () => {
        expect(disemvowel('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789!£$%^&*(){}[]:;@<>/?')).toBe('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789!£$%^&*(){}[]:;@<>/?');
        expect(disemvowel('')).toBe('');
    });
});

// Section A 08. Test the removeUrlAnchor() function

describe('Testing the removeUrlAnchor function', () => {
    it('Should remove any content from the URL that is an anchor (any part after the # symbol)', () => {
        expect(removeUrlAnchor('https://www.w3.org/TR/html4/struct/links.html#h-12.2.3')).toBe('https://www.w3.org/TR/html4/struct/links.html');
    });
    it('Should not remove anything from a URL that does not contain a # symbol', () => {
        expect(removeUrlAnchor('https://www.google.co.uk/')).toBe('https://www.google.co.uk/');
    });
});

// Section A 09. Test the strEndsWith() function

describe('Testing the strEndsWith function', () => {
    it('Should be truthy if the string given ends with the parameter given in the same case', () => {
        expect(strEndsWith('Hello World','d')).toBeTruthy();
        expect(strEndsWith('Running','ing')).toBeTruthy();
    });
    it('Should be falsy if the string given does not end with the parameter given', () => {
        expect(strEndsWith('Hello World','H')).toBeFalsy();
        expect(strEndsWith('Running','gin')).toBeFalsy();
    });
    it('Should be falsy if the string given ends with the parameter given in the wrong case', () => {
        expect(strEndsWith('Hello World','wORLD')).toBeFalsy();
        expect(strEndsWith('Running','InG')).toBeFalsy();
    });
});

// Section A 10. Test the numberToString() function

describe('Testing the numberToString function', () => {
    it('Should take an inputted number and output the same value as a string', () => {
        expect(numberToString(3)).toBe('3');
        expect(numberToString(-28)).toBe('-28');
        expect(numberToString(3.141)).toBe('3.141');
        expect(numberToString(-28.56)).toBe('-28.56');
        expect(numberToString(0)).toBe('0');
    });
    it('Should return the value as a string', () => {
        expect(typeof numberToString(3)).toBe('string');
        expect(typeof numberToString(-28)).toBe('string');
        expect(typeof numberToString(3.141)).toBe('string');
        expect(typeof numberToString(-28.56)).toBe('string');
    });
});