TestMyCode.run("testing hello function", function(assert){
    var result = hello();
    
    assert.equals("hello world", result, "testing hello function");
});

TestMyCode.run("testing hello_uppercase function", function(assert){
    var result = hello_uppercase("onwaba");
    
    assert.equals("Hello ONWABA", result, "testing hello_uppercase function");
});

TestMyCode.run("testing number_list function", function(assert){
    var result = number_list();
    
    assert.equals(1,2,3,4,5, result, "testing number_list function");
});