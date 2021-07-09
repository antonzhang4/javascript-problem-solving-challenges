function largestNumber(num) {
    //  write code here.
    let largestNum = Math.pow(10, num)
    return largestNum - 1
}



/**
* Test Suite 
*/
describe('largestNumber()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const num = 2;
        
        // act
        const result = largestNumber(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(99);
    });
});