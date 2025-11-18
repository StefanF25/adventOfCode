import test from "node:test"
import assert from "node:assert"
import { findLevel } from "../../src/2015/01.ts"
import getInputFile from "../../src/util/importTxtFile.ts"

test("Part 1", async (t) => {
  await t.test("Example 1", () => {
    assert.strictEqual(findLevel("(())")[0], 0)
    assert.strictEqual(findLevel("()()")[0], 0)
  })

  await t.test("Example 2", () => {
    assert.strictEqual(findLevel("(((")[0], 3)
    assert.strictEqual(findLevel("(()(()(")[0], 3)
  })

  await t.test("Example 3", () => {
    assert.strictEqual(findLevel("))(((((")[0], 3)
  })

  await t.test("Example 4", () => {
    assert.strictEqual(findLevel("())")[0], -1)
    assert.strictEqual(findLevel("))(")[0], -1)
  })

  await t.test("Example 5", () => {
    assert.strictEqual(findLevel(")))")[0], -3)
    assert.strictEqual(findLevel(")())())")[0], -3)
  })
})

test("Part 2", async (t) => {
  await t.test("Example 1", () => {
    assert.strictEqual(findLevel(")", -1)[1], 1)
  })

  await t.test("Example 2", () => {
    assert.strictEqual(findLevel("()())", -1)[1], 5)
  })
})

test("Task", async (t) => {
  const input: string = getInputFile(import.meta.url, "./inputs/01.txt")

  await t.test("Part 1", () => {
    console.log("--- Part 1 ---")
    findLevel(input)
  })

  await t.test("Part 2", () => {
    console.log("--- Part 2 ---")
    findLevel(input, -1)
  })
})
