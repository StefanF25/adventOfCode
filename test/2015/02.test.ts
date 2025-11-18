import test from "node:test"
import assert from "node:assert"
import { getRibbon, getWrapping } from "../../src/2015/02.ts"
import getInputFile from "../../src/util/importTxtFile.ts"

const dimensions1 = [2, 3, 4]
const dimensions2 = [1, 1, 10]

test("Part 1", async (t) => {
  await t.test("Example 1", () => {
    assert.strictEqual(getWrapping(dimensions1), 58)
  })

  await t.test("Example 2", () => {
    assert.strictEqual(getWrapping(dimensions2), 43)
  })
})

test("Part 2", async (t) => {
  await t.test("Example 1", () => {
    assert.strictEqual(getRibbon(dimensions1), 34)
  })

  await t.test("Example 2", () => {
    assert.strictEqual(getRibbon(dimensions2), 14)
  })
})

test("Task", async (t) => {
  const input: string = getInputFile(import.meta.url, "./inputs/02.txt")

  let totalWrapping: number = 0
  let totalRibbon: number = 0

  for (const line of input.split("\n")) {
    if (line.length > 0) {
      const dimensions: number[] = line.split("x").map((dim) => parseInt(dim))
      totalWrapping += getWrapping(dimensions)
      totalRibbon += getRibbon(dimensions)
    }
  }

  await t.test("Part 1", () => {
    console.log("--- Part 1 ---")
    console.log(`The total wrapping needed is ${totalWrapping} square feet`)
  })

  await t.test("Part 2", () => {
    console.log("--- Part 2 ---")
    console.log(`The total ribbon needed is ${totalRibbon} feet`)
  })
})
