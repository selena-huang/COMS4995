/* mocha style testing */
var assert = require('assert');
var sinon = require('sinon');
var sandbox = sinon.createSandbox();
var expect = require('chai').expect;
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
global.document = new JSDOM(`...`);

var test = require('../js/scripts.js');


describe('testing add function', function(){
  beforeEach(function () {
        sandbox.stub(test, 'renderProduct');
        var fakeDoc = sinon.stub(document, "querySelector").returns(null);
    });

    afterEach(function () {
        // completely restore all fakes created through the sandbox
        sandbox.restore();
    });
	it('should add a value to the list', function() {
      var mock = sinon.mock(productList);
      test.addProduct("hello");
      console.log(mock.length);
    });
});

// describe('testing dict functions', function(){
// 	describe('#add()', function(){
//     it('should return object in dict', function() {
//         expect(test.add('value')).to.equal(0);
//       });
//   });
//   describe('#remove()', function(){
//     it('should return index', function() {
//         expect(test.remove(0)).to.equal('value');
//       });
//   });
//   describe('#contains()', function(){
//     it('existing should return value', function() {
//         test.add('contains');
//         expect(test.contains(1)).to.equal('contains');
//       });
//     it('not existing should return null', function() {
//         expect(test.contains(0)).to.be.null;
//       });
//   });
// });