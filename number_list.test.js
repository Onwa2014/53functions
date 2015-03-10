QUnit.test("testing number_list function", function(assert){
	var result = number_list(6);
  	assert.deepEqual([1,2,3,4,5,6], result, "testing number_list")
});
