import getInputFile from "../util/importTxtFile.ts"

const input: string = getInputFile(import.meta.url, './inputs/06.txt')

export const executeInstruction = (instruction: string, lights: number[][]) => {
    if (instruction.startsWith("t")) {
        const [_, command, x1, y1, x2, y2]: string[] = instruction.match(/(\D+) (\d+),(\d+) through (\d+),(\d+)/) ?? []
        for (let x: number = +x1; x <= +x2; x++) {
            for (let y: number = +y1; y <= +y2; y++) {
                switch (command) {
                    case 'turn on':
                        lights[x][y] = 1
                        break
                    case 'turn off':
                        lights[x][y] = 0
                        break
                    case 'toggle':
                        lights[x][y] = lights[x][y] === 0 ? 1 : 0
                        break
                    default:
                        console.log(`unknown command: ${command}`)
                }
            }
        }
    }
}

export const executeInstruction2 = (instruction: string, lights: number[][]) => {
    if (instruction.startsWith("t")) {
        const [_, command, x1, y1, x2, y2]: string[] = instruction.match(/(\D+) (\d+),(\d+) through (\d+),(\d+)/) ?? []
        for (let x: number = +x1; x <= +x2; x++) {
            for (let y: number = +y1; y <= +y2; y++) {
                switch (command) {
                    case 'turn on':
                        lights[x][y]++
                        break
                    case 'turn off':
                        if (lights[x][y] > 0) {
                            lights[x][y]--
                        }
                        break
                    case 'toggle':
                        lights[x][y] += 2
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
    executeInstruction2(line, lightsArray)
}

export const totalBrightness = (lights: number[][]) => lights.reduce((count, row) => count + row.reduce((rowCount, light) => rowCount + light, 0), 0)

console.log('total brightness is ' + totalBrightness(lightsArray))
