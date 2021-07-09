function maxMultiple(divisor, bound) {
    //  write code here.
    let value = 0
    for(i=bound; i>0; i--) {
        if(i % divisor === 0) {
            value = i
            break;
        }
    }
    return value

    /* better solution
    const remainder = bound % divisor;
    
    return bound - remainder;*/
}



/**
* Test Suite 
*/
describe('maxMultiple()', () => {
    it('returns largest integer up to boundary', () => {
        // arrange
        const divisor = 3;
        const bound = 10;
        
        // act
        const result = maxMultiple(divisor, bound);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(9);
    });
});