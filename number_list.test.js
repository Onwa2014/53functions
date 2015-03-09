QUnit.test("testing number_list function", function(assert){
	var result = number_list(6);
  assert.equal([1,2,3,4,5,6].toString(), result.toString(), "testing number_list")
});
