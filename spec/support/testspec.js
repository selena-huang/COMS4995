//test file in jasmine

describe('Get Name', function () {
	var dummyElement = document.createElement('name');
	document.getElementById = 
		jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
		
    it('once name is inserted, a name should be returned', function () {
    	document.getElementById('name').value = "hello";
    	hello();
    	expect(name).toEqual("hello");
    });
});
