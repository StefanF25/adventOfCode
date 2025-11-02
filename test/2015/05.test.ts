import test from "node:test"
import assert from "node:assert"
import {checkRules, checkRules2} from "../../src/2015/05.ts";

test('Part 1', async (t) => {
    await t.test('Example 1', () => {
        assert.strictEqual(checkRules('ugknbfddgicrmopn'), true)
    })

    await t.test('Example 2', () => {
        assert.strictEqual(checkRules('aaa'), true)
    })

    await t.test('Example 3', () => {
        assert.strictEqual(checkRules('jchzalrnumimnmhp'), false)
    })

    await t.test('Example 4', () => {
        assert.strictEqual(checkRules('haegwjzuvuyypxyu'), false)
    })

    await t.test('Example 5', () => {
        assert.strictEqual(checkRules('dvszwmarrgswjxmb'), false)
    })
})

test('Part 2', async (t) => {
    await t.test('Example 1', () => {
        assert.strictEqual(checkRules2('qjhvhtzxzqqjkmpb'), true)
    })

    await t.test('Example 2', () => {
        assert.strictEqual(checkRules2('xxyxx'), true)
    })

    await t.test('Example 3', () => {
        assert.strictEqual(checkRules2('uurcxstgmygtbstg'), false)
    })

    await t.test('Example 4', () => {
        assert.strictEqual(checkRules2('ieodomkazucvgmuy'), false)
    })
})
