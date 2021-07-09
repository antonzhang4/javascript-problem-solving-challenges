function caseInsensitivePalindrome(str) {
    //  write code here.
    for(i=0; i<str.length-1;i++) {
        if(str[i].toLowerCase() != str[str.length-1-i].toLowerCase()) {
            return false;
        }
    }
    return true;

    //another solution
    /*const caselessStr = str.toLowerCase();
    const reversedCaselessStr = caselessStr.split('').reverse().join(''); 
    
    return caselessStr === reversedCaselessStr;*/
}



/**
* Test Suite 
*/
describe('caseInsensitivePalindrome()', () => {
    it('returns true for a case insensitive palindrome', () => {
        // arrange
        const str = 'AaBaa';
        
        // act
        const result = caseInsensitivePalindrome(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });
    
    it('returns false when not a case insensitive palindrome', () => {
        // arrange
        const str = 'abac';
        
        // act
        const result = caseInsensitivePalindrome(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(false);
    });    
});