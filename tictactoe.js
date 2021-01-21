class TicTacToe {
    constructor() {
        this.activePlayer = "X";
        this.boardState = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];
        this.winner = "NONE";
    }
    implementTurn(ele) {
        const id = ele.id;

        if (ele.innerText.trim(" ") === "") {
            ele.innerText = this.activePlayer;
            let [row, col] = this.getIndex(id);
            this.boardState[row][col] = this.activePlayer;

            let end = this.checkEndGame();
            if (end) {
                ele.innerText = this.activePlayer;
                //
                alert(`CONGRATULATIONS THE WINNER IS: ${this.winner}`);
                location.reload();
            }
            this.getActivePlayer();
        }
    }


    checkEndGame() {
        const board = this.boardState;
        let end = true;

        //ROW WISE WINNER CHECK
        for (let i = 0; i < 3; i++) {
            end = true;
            for (let j = 1; j < 3; j++) {
                if (board[i][j - 1] !== board[i][j] || board[i][j] === "") {
                    end = false;
                }
            }
            if (end) {
                this.winner = this.activePlayer;
                return true;
            }
        }

        //COLUMN WISE WINNER CHECK
        for (let i = 0; i < 3; i++) {
            end = true;
            for (let j = 1; j < 3; j++) {
                if (board[j - 1][i] !== board[j][i] || board[j][i] === "") {
                    end = false;
                }
            }
            if (end) {
                this.winner = this.activePlayer;
                return true;
            }
        }
        //BOTH DIAGONALS WISE WINNER CHECK
        if ((board[1][1] !== "") && ((board[0][0] == board[1][1] && board[1][1] == board[2][2]) ||
                (board[0][2] == board[1][1] && board[1][1] == board[2][0]))) {
            this.winner = this.activePlayer;
            return true;
        }


        //CHECKING IF BOARD IS FILLED
        end = true;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === "") {
                    end = false;
                }

            }
        }
        if (end) {
            this.winner = "DRAW";
            return true;
        }
    }

    getActivePlayer() {
        this.activePlayer = this.activePlayer === "X" ? "0" : "X";
        document.getElementById("activePlayer").innerText = this.activePlayer;
    }

    getIndex(box) {
        return [parseInt((box - 1) / 3), (box - 1) % 3];
    }
}

let game = new TicTacToe();

function implementTurn(ele) {
    game.implementTurn(ele);
}

function refreshPage() {
    location.reload();
}