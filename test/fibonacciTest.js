import { assert } from 'chai';
import { fibonacci } from '../fibonacci.js';
import { describe, it } from 'mocha';

describe('Fibonacci sequencer', function(){
    it('Fibonacci sequence debunked?', function(){
        assert.equal(fibonacci(1), 0, 'Returns the nth no. in the Fibonacci sequence')
    });
});

