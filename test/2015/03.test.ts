import test from "node:test"
import assert from "node:assert"
import { visitHomes, visitHomes2 } from "../../src/2015/03.ts"
import getInputFile from "../../src/util/importTxtFile.ts"

test("Part 1", async (t) => {
  await t.test("Example 1", () => {
    assert.strictEqual(visitHomes([...">"]), 2)
  })

  await t.test("Example 2", () => {
    assert.strictEqual(visitHomes([..."^>v<"]), 4)
  })

  await t.test("Example 3", () => {
    assert.strictEqual(visitHomes([..."^v^v^v^v^v"]), 2)
  })
})

test("Part 2", async (t) => {
  await t.test("Example 1", () => {
    assert.strictEqual(visitHomes2([..."^v"]), 3)
  })

  await t.test("Example 2", () => {
    assert.strictEqual(visitHomes2([..."^>v<"]), 3)
  })

  await t.test("Example 3", () => {
    assert.strictEqual(visitHomes2([..."^v^v^v^v^v"]), 11)
  })
})

test("Task", async (t) => {
  const input: string = getInputFile(import.meta.url, "./inputs/03.txt")

  await t.test("Part 1", () => {
    console.log("--- Part 1 ---")
    console.log(`Santa visited ${visitHomes([...input])} homes`)
  })

  await t.test("Part 2", () => {
    console.log("--- Part 2 ---")
    console.log(
      `Santa and Robo-Santa visited ${visitHomes2([...input])} homes`,
    )
  })
})
