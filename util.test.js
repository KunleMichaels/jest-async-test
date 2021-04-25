jest.mock('./http');

const { loadTitle } = require('./util'); 


it('should return uppercase text', function(){
    loadTitle().then(function(data){
        expect(data).toBe('DELECTUS AUT AUTEM');
    })
})