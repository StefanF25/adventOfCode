import {readFileSync} from 'fs'

// Counts 2 extra steps because of newline at end of file
const input: string = readFileSync('./inputs/03.txt', 'utf-8')

type coordinate = [number, number]

const initHome: coordinate = [0, 0]
let currentHome1: coordinate = initHome
let currentHome2: coordinate = initHome
const visitedHomes: coordinate[] = [initHome]

const compareCoords = (c1: coordinate, c2: coordinate): boolean => c1[0] === c2[0] && c1[1] === c2[1]

const visitHome = (direction: string, currentHome: coordinate): coordinate => {
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
            return currentHome
    }
    if (!visitedHomes.find(home => compareCoords(home, newHome))) {
        visitedHomes.push(newHome)
    }
    return newHome
}

[...input].forEach((char, idx) => {
    if (idx % 2 == 0) {
        currentHome1 = visitHome(char, currentHome1)
    } else {
        currentHome2 = visitHome(char, currentHome2)
    }
})

console.log(`Santa and Robo-Santa visited ${visitedHomes.length} homes`)
