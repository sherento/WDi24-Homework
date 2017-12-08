import React, { PureComponent } from 'react';
import Square from './Square.js';

class Board extends PureComponent {
  constructor( props ) {
    super( props );
    this.state = {
      squares: Array(9).fill( null ),
    };
    // this._handleClick = this._handleClick.bind( this );
    // console.log( this );
  }

  _handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState( { squares: squares } );
    // console.log( this.state );
  }

  renderSquare(i) {
    return (
      <Square
        value={ this.state.squares[i] }
        // TODO: do we have to use the fat arrow to pass an argument into the function?
        // onClick={ () => this._handleClick(i) }
        onClick={ this._handleClick.bind( this, i ) }
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{ status }</div>
        <div className="board-row">
          { this.renderSquare(0) }
          { this.renderSquare(1) }
          { this.renderSquare(2) }
        </div>
        <div className="board-row">
          { this.renderSquare(3) }
          { this.renderSquare(4) }
          { this.renderSquare(5) }
        </div>
        <div className="board-row">
          { this.renderSquare(6) }
          { this.renderSquare(7) }
          { this.renderSquare(8) }
        </div>
      </div>
    );
  }
}

export default Board;
