const expect = require('expect');

var {generateMessage} = require('./message');


describe('generateMessage', ()=>{
    it('should generate the correct message object', ()=>{
        var from = 'Ben';
        var text = 'I am going to get you!';
        var res = generateMessage(from, text);
        expect(res.createAt).toBeA('number');
        expect(res).toInclude({
            from,
            text
        });
    });
});