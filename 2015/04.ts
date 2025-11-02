import {createHash} from "node:crypto";

const createMd5: (str: string) => string = (str: string): string => createHash('md5').update(str).digest('hex')

const createHashString: (secret: string, num: (number | string)) => string = (secret: string, num: number | string): string => createMd5(secret + num)

const iterateNumbers = (secret: string): [number, string] => {
    let input = 0
    let output = ''

    while (!output.startsWith('00000')) {
        input++
        output = createHashString(secret, input)
    }

    return [input, output]
}

// Examples
console.log('Example 1 (\'abcdef\')')
const [inputE1, outputE1] = iterateNumbers('abcdef')
console.log(outputE1)
console.log(`Input number: ${inputE1} (expected 609043)`)
console.log('Example 2 (\'abcdef\')')
const [inputE2, outputE2] = iterateNumbers('pqrstuv')
console.log(outputE2)
console.log(`Input number: ${inputE2} (expected 1048970)`)

const secret = 'iwrupvqb'
const [input, output] = iterateNumbers(secret)
console.log('Secret: ' + secret)
console.log(output)
console.log('Input number: ' + input)
