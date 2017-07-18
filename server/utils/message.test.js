const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');


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

describe('generateLocationMessage', ()=>{
    it('should generate correct location object', ()=>{
        var from = 'Benny';
        var url = 'https://www.google.com/maps?q=15,19';
        var message = generateLocationMessage(from, 15, 19);
            expect(message.createdAt).toBeA('number');
            expect(message).toInclude({from, url});
        });
});
