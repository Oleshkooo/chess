import './Style/ChessBoard.scss'

export default function ChessBoard() {
    let cells = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]

    return (
        <div className="chessBoard">
            <div className="board">
                
                {cells.map((item, index) => (
                    <div className="cell">
                        
                    </div>
                ))}

                {/* <div className="cell bRook" />
                <div className="cell bKnight" />
                <div className="cell bBishop" />
                <div className="cell bKing" />
                <div className="cell bQueen" />
                <div className="cell bPawn" />

                <div className="cell wRook" />
                <div className="cell wKnight" />
                <div className="cell wBishop" />
                <div className="cell wKing" />
                <div className="cell wQueen" />
                <div className="cell wPawn" /> */}


            </div>
        </div>
    )
}