// 'use strict';

// const server = require('../lib/server.js');
// const supergoose = require('@code-fellows/supergoose');
// const mockRequest = supergoose(server);

// describe('Category API', () => {
//     it('post a new category item', () => {
//         let testObj = { name: 'T-shirt', describtion: 'blue-shirt', type: 'Clothes' };
//         return mockRequest.post('/api/v1/categories')
//             .send(testObj)
//             .then(data => {
//                 let record = data.body;
//                 Object.keys(testObj).forEach(key => {
//                     expect(record[key]).toEqual(testObj[key]);
//                 });
//             });
//     });

// });
// describe('product API', () => {
//     it('post a new product item', () => {
//         let testObj = { name: 'Iphonex', describtion: 'smartPhone', type: 'accesslories' };
//         return mockRequest.post('/api/v1/products')
//             .send(testObj)
//             .then(data => {
//                 let record = data.body;
//                 Object.keys(testObj).forEach(key => {
//                     expect(record[key]).toEqual(testObj[key]);
//                 });
//             });
//     });
// });