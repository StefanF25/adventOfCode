import {createHash} from "node:crypto";

const createMd5: (str: string) => string = (str: string): string => createHash('md5').update(str).digest('hex')

const createHashString: (secret: string, num: (number | string)) => string = (secret: string, num: number | string): string => createMd5(secret + num)

const iterateNumbers = (secret: string, leadingZeros: number = 5): [number, string] => {
    let input = 0
    let output = ''

    console.log(`Secret: ${secret}`)
    console.log(`${leadingZeros} leading zeros`)

    while (!output.startsWith('0'.repeat(leadingZeros))) {
        input++
        output = createHashString(secret, input)
    }

    return [input, output]
}

// Examples
console.log('Example 1')
const [inputE1, outputE1] = iterateNumbers('abcdef')
console.log(outputE1)
console.log(`Input number: ${inputE1} (expected 609043)`)

console.log('Example 2')
const [inputE2, outputE2] = iterateNumbers('pqrstuv')
console.log(outputE2)
console.log(`Input number: ${inputE2} (expected 1048970)`)

const secret = 'iwrupvqb'
const [input, output] = iterateNumbers(secret)
console.log(output)
console.log('Input number: ' + input)

const [input2, output2] = iterateNumbers(secret, 6)
console.log(output2)
console.log('Input number: ' + input2)
