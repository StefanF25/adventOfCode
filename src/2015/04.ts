import { createHash } from "node:crypto"

const createMd5 = (str: string): string =>
  createHash("md5").update(str).digest("hex")

const createHashString = (secret: string, num: number | string): string =>
  createMd5(secret + num)

export const iterateNumbers = (
  secret: string,
  leadingZeros: number = 5,
): [number, string] => {
  let input = 0,
    output = ""

  while (!output.startsWith("0".repeat(leadingZeros))) {
    input++
    output = createHashString(secret, input)
  }

  return [input, output]
}
