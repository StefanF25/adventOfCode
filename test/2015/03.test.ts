import test from "node:test"
import assert from "node:assert"
import {visitHomes, visitHomes2} from "../../src/2015/03.ts"

test('Part 1', async (t) => {
    await t.test('Example 1', () => {
        assert.strictEqual(visitHomes([...">"]), 2)
    })

    await t.test('Example 2', () => {
        assert.strictEqual(visitHomes([..."^>v<"]), 4)
    })

    await t.test('Example 3', () => {
        assert.strictEqual(visitHomes([..."^v^v^v^v^v"]), 2)
    })
})

test('Part 2', async (t) => {
    await t.test('Example 1', () => {
        assert.strictEqual(visitHomes2([..."^v"]), 3)
    })

    await t.test('Example 2', () => {
        assert.strictEqual(visitHomes2([..."^>v<"]), 3)
    })

    await t.test('Example 3', () => {
        assert.strictEqual(visitHomes2([..."^v^v^v^v^v"]), 11)
    })
})
