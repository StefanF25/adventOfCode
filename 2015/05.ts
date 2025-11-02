import {readFileSync} from 'fs'

// Counts 2 extra steps because of newline at end of file
const input: string = readFileSync('./inputs/05.txt', 'utf-8')

const checkRules: (input: string) => boolean = (str: string): boolean => {
    const vowelRegex = /(\w*[aeuio]\w*){3,}/i
    const doubleRegex = /([a-z])\1/i
    const exceptionRegex = /(ab|cd|pq|xy)+/i

    const vowelMatch = vowelRegex.test(str)
    const doubleMatch = doubleRegex.test(str)
    const exceptionMatch = exceptionRegex.test(str)

    return vowelMatch && doubleMatch && !exceptionMatch
}

const checkString: (input: string) => string = (str: string): string => str + (checkRules(str) ? ' is nice' : ' is naughty')

// Examples
console.log('Example 1')
console.log(checkString('ugknbfddgicrmopn') + ' (expected nice)')
console.log('Example 2')
console.log(checkString('aaa') + ' (expected nice)')
console.log('Example 3')
console.log(checkString('jchzalrnumimnmhp') + ' (expected naughty)')
console.log('Example 4')
console.log(checkString('haegwjzuvuyypxyu') + ' (expected naughty)')
console.log('Example 5')
console.log(checkString('dvszwmarrgswjxmb') + ' (expected naughty)')

let count: number = 0

for (const line of input.split("\n")) {
    const isValid = checkRules(line)
    if (isValid) {
        count++
    }
}

console.log(count + ' strings are nice')
