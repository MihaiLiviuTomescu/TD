function test () {
    if (getFibonacci(2).toString() !== [1,1].toString()) {
        console.error("Test failed for n=2");
      } else {
        console.log("Test passed  n=2");
      }
      if (getFibonacci(5).toString() !== [1,1,2,3,5].toString()) {
        console.error("Test failed for n=5");
      } else {
        console.log("Test passed  n=5");
      }
      console.log(getFibonacci() =="not allowed"?"Passed":"Failed");
      console.log(getFibonacci(0) =="not allowed"?"Passed":"Failed");
      
}
    
     test () 