'use strict';

const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Category API', () => {
    it('post a new category item', () => {
        let testObj = { name: 'dress', describtion: 'summer dress', type: 'Clothes' };
        return mockRequest.post('/api/v1/categories')
            .send(testObj)
            .then(data => {
                console.log('***********', data.body);
                let record = data.body;
                Object.keys(testObj).forEach(key => {
                    expect(record[key]).toEqual(testObj[key]);
                });
            });
    });

});