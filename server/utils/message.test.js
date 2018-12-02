var expect = require('expect');
var {generateMessage}  = require('./message');

describe('generateMessage', () => {
   it('should generate correct message object', () => {

       var from = 'Abhi';
       var text = 'Some message';
       var message = generateMessage(from, text);

       expect(typeof message.cretaedAt).toBe('number');
       expect(message).toMatchObject({from, text});
   });

});