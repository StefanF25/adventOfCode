import {readFileSync} from 'fs'

// Counts 2 extra steps because of newline at end of file
const input: string = readFileSync('./inputs/03.txt', 'utf-8')

type coordinate = [number, number]

let currentHome: coordinate = [0, 0]
const visitedHomes: coordinate[] = [currentHome]

const compareCoords = (c1: coordinate, c2: coordinate): boolean => c1[0] === c2[0] && c1[1] === c2[1]

const visitHome = (direction: string): boolean => {
    let newHome: coordinate = [...currentHome]
    switch (direction) {
        case '<':
            newHome[0] = currentHome[0] - 1
            break
        case '>':
            newHome[0] = currentHome[0] + 1
            break
        case '^':
            newHome[1] = currentHome[1] + 1
            break
        case 'v':
            newHome[1] = currentHome[1] - 1
            break
        default:
            console.log('invalid direction:' + direction)
            return false
    }
    if (!visitedHomes.find(home => compareCoords(home, newHome))) {
        visitedHomes.push(newHome)
    }
    currentHome = newHome
    return true
}

for (const char of input) {
    visitHome(char)
}

console.log(`Santa visited ${visitedHomes.length} homes`)
