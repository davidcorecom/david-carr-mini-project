export const checkWin = (board, player) => {
    const winLine = [
    [0,1,2],[3,4,5],[6,7,8], //winning rows
    [0,3,6],[1,4,7],[2,5,8], //winning columns
    [0,4,8],[2,4,6] //winning diagonals
]
    for (let i = 0; i < winLine.length; i++) {
        console.log(lines[i])

        const winLine = winLine[i]
        const first = winLine[0]
        const second = winLine[1]
        const third = winLine[2]

    if (
        board[first] === player &&
        board[second] === player &&
        board[third] === player
    ) {
        return true
    }
    }
    return false
}
