// IMPORT MODULES under test here:
// import { example } from '../example.js';
var test = QUnit.test;
test('time to test a function', function (expect) {
    //Arrange
    // Set up your arguments and expectations
    var expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    var actual = false;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
