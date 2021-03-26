import React, { Component } from 'react';

class Player extends Component {

    handleForm(e) {
        e.preventDefault();
        this.props.player(e.target.player.value)
    }
    render() {
        return (
            <form className='contaner1' onSubmit={(e) => this.handleForm(e)}>
                <label>
                    Player X
                <input type="radio" name="player" value="X" />
                </label>
                <label>
                    Player O
                <input type="radio" name="player" value="O" />
                </label>
                <br></br>
                <input type="submit" value="Start" />
            </form>
        )
    }
}

export default Player;