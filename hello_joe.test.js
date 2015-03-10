QUnit.test("testing hello_joe function",function(assert){
	var result= hello_joe("Joe");
 	assert.equal("Hello", result, "testing hello_joe('joe')")
});

QUnit.test("testion hello_joe('bob')", function(assert){
	var result = hello_joe("Bob");
	assert.equal("Hello", result, "testing hello_joe function")
});

QUnit.test("testing hello_joe funtion", function(assert){
	var result = hello_joe("Onwaba");
	assert.equal(result,"Hello Onwaba", "testing hello_joe('Onwaba')")
});



