// IMPORT MODULES under test here:
import { talk } from '../utils';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'OK';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = talk('ok');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
