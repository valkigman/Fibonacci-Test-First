import { assert } from 'chai';
import { fibonacci } from '../fibonacci.js';
import { describe, it } from 'mocha';

describe('Fibonacci sequencer', function(){
    it('Fibonacci sequence debunked?', function(){
        assert.equal(fibonacci(1), 1, 'fibonacci(1) = 1') // 0, 1, 1, 2, 3
    });
    it('Fibonacci sequence debunked?', function(){
        assert.equal(fibonacci(7), 13, 'fibonacci(7) = 13')
    });
    it('Fibonacci sequence debunked?', function(){
        assert.equal(fibonacci(9), 34, 'fibonacci(9) = 34')
    });
    it('Fibonacci sequence debunked?', function(){
        assert.equal(fibonacci(-1), -1, 'fibonacci(-1) = 0')
    });
    it('Fibonacci sequence debunked?', function(){
        assert.equal(fibonacci(1480), -1, 'fibonacci(1480) = 0')
    });
});

// by Arnold Weasly and Valentine Kiguli
