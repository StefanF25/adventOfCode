import {readFileSync} from 'fs'

// Counts 2 extra steps because of newline at end of file
const input: string = readFileSync('./inputs/05.txt', 'utf-8')

const checkRules: (str: string) => boolean = (str: string): boolean => {
    const rule1Regex = /([a-z]{2}).*\1/
    const rule2Regex = /([a-z]).\1/

    const rule1Match = rule1Regex.test(str)
    const rule2Match = rule2Regex.test(str)

    return rule1Match && rule2Match
}

const checkString: (str: string) => string = (str: string): string => str + (checkRules(str) ? ' is nice' : ' is naughty')

// Examples
console.log('Example 1')
console.log(checkString('qjhvhtzxzqqjkmpb') + ' (expected nice)')
console.log('Example 2')
console.log(checkString('xxyxx') + ' (expected nice)')
console.log('Example 3')
console.log(checkString('uurcxstgmygtbstg') + ' (expected naughty)')
console.log('Example 4')
console.log(checkString('ieodomkazucvgmuy') + ' (expected naughty)')

let count: number = 0

for (const line of input.split("\n")) {
    if (checkRules(line)) {
        count++
    }
}

console.log(count + ' strings are nice')
