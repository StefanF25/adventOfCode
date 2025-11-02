import test from "node:test"
import assert from "node:assert"
import {executeInstruction, executeInstruction2, totalBrightness} from "../../src/2015/06.ts"

test('Part 1', async (t) => {
    const lightsArray = Array.from(Array(1000), _ => Array(1000).fill(0))
    await t.test('Example 1', () => {
        executeInstruction('turn on 0,0 through 999,999', lightsArray)
        assert.strictEqual(totalBrightness(lightsArray), 1000000)
    })

    await t.test('Example 2', () => {
        executeInstruction('toggle 0,0 through 999,0', lightsArray)
        assert.strictEqual(totalBrightness(lightsArray), 999000)
    })

    await t.test('Example 3', () => {
        executeInstruction('turn off 499,499 through 500,500', lightsArray)
        assert.strictEqual(totalBrightness(lightsArray), 998996)
    })
})

test('Part 2', async (t) => {
    await t.test('Example 1', () => {
        const lightsArray = Array.from(Array(1000), _ => Array(1000).fill(0))
        executeInstruction2('turn on 0,0 through 0,0', lightsArray)
        assert.strictEqual(totalBrightness(lightsArray), 1)
    })

    await t.test('Example 2', () => {
        const lightsArray = Array.from(Array(1000), _ => Array(1000).fill(0))
        executeInstruction2('toggle 0,0 through 999,999', lightsArray)
        assert.strictEqual(totalBrightness(lightsArray), 2000000)
    })
})
