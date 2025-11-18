import test from "node:test"
import assert from "node:assert"
import { iterateNumbers } from "../../src/2015/04.ts"

test("Part 1", async (t) => {
  await t.test("Example 1", () => {
    const [inputE1] = iterateNumbers("abcdef")
    assert.strictEqual(inputE1, 609043)
  })

  await t.test("Example 2", () => {
    const [inputE2] = iterateNumbers("pqrstuv")
    assert.strictEqual(inputE2, 1048970)
  })
})

test("Task", async (t) => {
  const secret = "iwrupvqb"

  await t.test("Part 1", () => {
    console.log("--- Part 1 ---")
    const [input, output] = iterateNumbers(secret)
    console.log(output)
    console.log("Input number: " + input)
  })

  await t.test("Part 2", () => {
    console.log("--- Part 2 ---")
    const [input2, output2] = iterateNumbers(secret, 6)
    console.log(output2)
    console.log("Input number: " + input2)
  })
})
