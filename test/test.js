/* mocha style testing */
var assert = require('assert');
// var jsdom = require('mocha-jsdom');

// global.document = jsdom();

var expect = require('chai').expect;
var test = require('../js/scripts.js');

// describe('Get Name', function () {
//     it('once name is inserted, should be a name', function () {
//       let name_block = document.getElementById('name');
//     });
// });


describe('testing hello()', function(){
	it('should return input: name', function() {
      expect(test.hello('name')).to.equal('name');
    });
});

describe('testing dict functions', function(){
	describe('#add()', function(){
    it('should return object in dict', function() {
        expect(test.add('value')).to.equal(0);
      });
  });
  describe('#remove()', function(){
    it('should return index', function() {
        expect(test.remove(0)).to.equal('value');
      });
  });
  describe('#contains()', function(){
    it('existing should return value', function() {
        test.add('contains');
        expect(test.contains(1)).to.equal('contains');
      });
    it('not existing should return null', function() {
        expect(test.contains(0)).to.be.null;
      });
  });
});