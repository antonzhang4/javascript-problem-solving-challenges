function factorialNumber(num) {
    // write code here
    if(num===1) {
        return 1;
    }
    return num * factorialNumber(num - 1)

    /*other solution
    let sum = 1;
    
    for(let i = 1; i <= num; i++) {
        // sum = sum * i;
        sum *= i;
    }
    
    return sum;*/
}



/**
* Test Suite 
*/
describe('factorialNumber()', () => {
    it('returns factorial of number param', () => {
        // arrange
        const num = 5;
        
        // act
        const result = factorialNumber(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(120);
    });
});