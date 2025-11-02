import {readFileSync} from 'fs'

const input: string = readFileSync('./inputs/06.txt', 'utf-8')

const executeInstruction = (instruction: string) => {
    if (instruction.startsWith("t")) {
        const [_, command, x1, y1, x2, y2]: string[] = instruction.match(/(\D+) (\d+),(\d+) through (\d+),(\d+)/) ?? []
        for (let x: number = +x1; x <= +x2; x++) {
            for (let y: number = +y1; y <= +y2; y++) {
                switch (command) {
                    case 'turn on':
                        lightsArray[x][y] = true
                        break
                    case 'turn off':
                        lightsArray[x][y] = false
                        break
                    case 'toggle':
                        lightsArray[x][y] = !lightsArray[x][y]
                        break
                    default:
                        console.log(`unknown command: ${command}`)
                }
            }
        }
    }
}

const lightsArray: boolean[][] = Array.from(Array(1000), _ => Array(1000).fill(false))

for (const line of input.split("\n")) {
    executeInstruction(line)
}

const countLights = lightsArray.reduce((count, row) => count + row.reduce((rowCount, light) => rowCount + +light, 0), 0)

console.log(countLights + ' lights are on')
