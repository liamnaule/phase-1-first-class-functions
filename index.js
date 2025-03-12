// Function that receives a callback and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function");
    };
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return () => console.log("I am an anonymous function");
  }
  
  // Exporting the functions for testing 
  module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
  