import { useState } from 'react'
import Square from "./Square"

const Board = () => {
    const [state, setstate] = useState(Array(9).fill(null))
    const [isXturn, setisXturn] = useState(true)
    const handleClick = (index) => {
        if (state[index] !== null) {
            return;
        }
        const copyState = [...state]
        console.log("click on ", index);
        copyState[index] = isXturn ? "X" : "0"
        setstate(copyState)
        console.log("click on ", copyState);
        setisXturn(!isXturn)
    }
    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        
        for (let logic of winnerLogic) {
            const tie = "No one"
            const [a, b, c] = logic
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a]
            }
            else if((state[a] !== null && state[b] !== null && state[c] !== null ) && (state[a] !== state[b] && state[a] !== state[c] )){
                return tie;
            }   
        }
        return false
    }
    const isWinner = checkWinner()
    return (
        <>
            {isWinner ?
                <div className='winner-container'>
                    <div className='winnerannounce'><span className='winnerspan'>{isWinner}</span> is Winner</div>
                    <button className='winnerbtn' onClick={() => setstate(Array(9).fill(null))}>play again</button>
                </div> :
                <>
                    <div className="board-container">
                        <div className="gameturn">Turn is <span className="gameturnmain">{isXturn ? "X" : "0"}</span></div>
                        <div className="board-row">
                            <Square onClick={() => handleClick(0)} value={state[0]} />
                            <Square onClick={() => handleClick(1)} value={state[1]} />
                            <Square onClick={() => handleClick(2)} value={state[2]} />
                        </div>
                        <div className="board-row">
                            <Square onClick={() => handleClick(3)} value={state[3]} />
                            <Square onClick={() => handleClick(4)} value={state[4]} />
                            <Square onClick={() => handleClick(5)} value={state[5]} />
                        </div>
                        <div className="board-row">
                            <Square onClick={() => handleClick(6)} value={state[6]} />
                            <Square onClick={() => handleClick(7)} value={state[7]} />
                            <Square onClick={() => handleClick(8)} value={state[8]} />
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Board
