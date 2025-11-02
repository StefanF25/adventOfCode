import test from "node:test"
import assert from "node:assert"
import {getRibbon, getWrapping} from "../../src/2015/02.ts"

const dimensions1 = [2, 3, 4]
const dimensions2 = [1, 1, 10]

test('Part 1', async (t) => {
    await t.test('Example 1', () => {
        assert.strictEqual(getWrapping(dimensions1), 58)
    })

    await t.test('Example 2', () => {
        assert.strictEqual(getWrapping(dimensions2), 43)
    })
})

test('Part 2', async (t) => {
    await t.test('Example 1', () => {
        assert.strictEqual(getRibbon(dimensions1), 34)
    })

    await t.test('Example 2', () => {
        assert.strictEqual(getRibbon(dimensions2), 14)
    })
})
