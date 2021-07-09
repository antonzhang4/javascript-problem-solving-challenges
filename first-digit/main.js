function firstDigit(str) {
    //  write code here.
    let firstDigit = ""
    for(i=0; i<str.length-1; i++) {
        if(str[i]>="0" && str[i]<="9"){
            firstDigit = str[i]
            break 
        }
            
    }
    return firstDigit
}



/**
* Test Suite 
*/
describe('firstDigit()', () => {
    it('return the first digit in a string', () => {
        // arrange
        const str = "var_1__Int2";
        
        // act
        const result = firstDigit(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe('1');
    });
});