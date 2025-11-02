import test from "node:test"
import assert from "node:assert"
import {iterateNumbers} from "../../src/2015/04.ts"

test('Part 1', async (t) => {
    await t.test('Example 1', () => {
        const [inputE1] = iterateNumbers('abcdef')
        assert.strictEqual(inputE1, 609043)
    })

    await t.test('Example 2', () => {
        const [inputE1] = iterateNumbers('pqrstuv')
        assert.strictEqual(inputE1, 1048970)
    })
})
