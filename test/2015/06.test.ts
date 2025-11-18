import test from "node:test"
import assert from "node:assert"
import {
  executeInstruction,
  executeInstruction2,
  totalBrightness,
} from "../../src/2015/06.ts"
import getInputFile from "../../src/util/importTxtFile.ts"

test("Part 1", async (t) => {
  const lightsArray = Array.from(Array(1000), () => Array(1000).fill(0))
  await t.test("Example 1", () => {
    executeInstruction("turn on 0,0 through 999,999", lightsArray)
    assert.strictEqual(totalBrightness(lightsArray), 1000000)
  })

  await t.test("Example 2", () => {
    executeInstruction("toggle 0,0 through 999,0", lightsArray)
    assert.strictEqual(totalBrightness(lightsArray), 999000)
  })

  await t.test("Example 3", () => {
    executeInstruction("turn off 499,499 through 500,500", lightsArray)
    assert.strictEqual(totalBrightness(lightsArray), 998996)
  })
})

test("Part 2", async (t) => {
  await t.test("Example 1", () => {
    const lightsArray = Array.from(Array(1000), () => Array(1000).fill(0))
    executeInstruction2("turn on 0,0 through 0,0", lightsArray)
    assert.strictEqual(totalBrightness(lightsArray), 1)
  })

  await t.test("Example 2", () => {
    const lightsArray = Array.from(Array(1000), () => Array(1000).fill(0))
    executeInstruction2("toggle 0,0 through 999,999", lightsArray)
    assert.strictEqual(totalBrightness(lightsArray), 2000000)
  })
})

test("Task", async (t) => {
  const input: string = getInputFile(import.meta.url, "./inputs/06.txt")

  await t.test("Part 1", () => {
    console.log("--- Part 1 ---")
    const lightsArray: number[][] = Array.from(Array(1000), () =>
      Array(1000).fill(0),
    )

    for (const line of input.split("\n")) {
      executeInstruction(line, lightsArray)
    }

    console.log("total brightness is " + totalBrightness(lightsArray))
  })

  await t.test("Part 2", () => {
    console.log("--- Part 2 ---")
    const lightsArray: number[][] = Array.from(Array(1000), () =>
      Array(1000).fill(0),
    )

    for (const line of input.split("\n")) {
      executeInstruction2(line, lightsArray)
    }

    console.log("total brightness is " + totalBrightness(lightsArray))
  })
})
