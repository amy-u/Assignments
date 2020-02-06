describe("Invert", () => {
    const {Invert} = require('../invert.js'); // Update with your class names and file name
    let er; 
  
    beforeEach(() => {
      er = new Invert();
    });

describe('Invert', function(){
    it('should return the inverted or the array', function(){
        let Invert = new Invert({ 'a': 1, 'b': 2, 'c': 1 });
        expect(Invert).toBe({ '1': 'c', '2': 'b' });
    });
});
});