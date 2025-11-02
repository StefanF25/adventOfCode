import getInputFile from "../util/importTxtFile.ts"

const input: string = getInputFile(import.meta.url, './inputs/03.txt')

type coordinate = [number, number]

const compareCoords = (c1: coordinate, c2: coordinate): boolean => c1[0] === c2[0] && c1[1] === c2[1]

const initHome: coordinate = [0, 0]
let visitedHomes: coordinate[] = [initHome]

const visitHome = (direction: string, currentHome: coordinate): void => {
    switch (direction) {
        case '<':
            currentHome[0]--
            break
        case '>':
            currentHome[0]++
            break
        case '^':
            currentHome[1]++
            break
        case 'v':
            currentHome[1]--
            break
    }
    if (!visitedHomes.find(home => compareCoords(home, currentHome))) {
        visitedHomes.push([...currentHome])
    }
}

export const visitHomes = (inputs: string[]): number => {
    visitedHomes = [initHome]
    let currentHome: coordinate = [...initHome]
    inputs.forEach((char) => {
        visitHome(char, currentHome)
    })
    return visitedHomes.length
}

export const visitHomes2 = (inputs: string[]): number => {
    visitedHomes = [initHome]
    let currentHome1: coordinate = [...initHome], currentHome2: coordinate = [...initHome]
    inputs.forEach((char, idx) => {
        visitHome(char, idx % 2 == 0 ? currentHome1 : currentHome2)
    })
    return visitedHomes.length
}

console.log(`Santa visited ${visitHomes([...input])} homes`)
console.log(`Santa and Robo-Santa visited ${visitHomes2([...input])} homes`)
