import {readFileSync} from 'fs'

const input: string = readFileSync('./inputs/06.txt', 'utf-8')

const executeInstruction = (instruction: string) => {
    if (instruction.startsWith("t")) {
        const [_, command, x1, y1, x2, y2]: string[] = instruction.match(/(\D+) (\d+),(\d+) through (\d+),(\d+)/) ?? []
        for (let x: number = +x1; x <= +x2; x++) {
            for (let y: number = +y1; y <= +y2; y++) {
                switch (command) {
                    case 'turn on':
                        lightsArray[x][y]++
                        break
                    case 'turn off':
                        if (lightsArray[x][y] > 0) {
                            lightsArray[x][y]--
                        }
                        break
                    case 'toggle':
                        lightsArray[x][y] += 2
                        break
                    default:
                        console.log(`unknown command: ${command}`)
                }
            }
        }
    }
}

const lightsArray: number[][] = Array.from(Array(1000), _ => Array(1000).fill(0))

for (const line of input.split("\n")) {
    executeInstruction(line)
}

const totalBrightness = lightsArray.reduce((count, row) => count + row.reduce((rowCount, light) => rowCount + light, 0), 0)

console.log('total brightness is ' + totalBrightness)
