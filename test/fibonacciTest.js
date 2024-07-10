import { assert } from 'chai';
import { fibonacci } from '../fibonacci.js';
import { describe, it } from 'mocha';

describe('Fibonacci sequencer', function(){
    it('Fibonacci sequence debunked?', function(){
        assert.equal(fibonacci(1), 1, 'Returns the nth no. in the Fibonacci sequence')
    });
    it('Fibonacci sequence debunked?', function(){
        assert.equal(fibonacci(7), 13, 'Returns the nth no. in the Fibonacci sequence')
    });
    it('Fibonacci sequence debunked?', function(){
        assert.equal(fibonacci(9), 34, 'Returns the nth no. in the Fibonacci sequence')
    });
    it('Fibonacci sequence debunked?', function(){
        assert.equal(fibonacci(-1), 0, 'Returns the nth no. in the Fibonacci sequence')
    });
    it('Fibonacci sequence debunked?', function(){
        assert.equal(fibonacci(1480), 0, 'Returns the nth no. in the Fibonacci sequence')
    });
});

// by Arnold Weasly and Valentine Kiguli
