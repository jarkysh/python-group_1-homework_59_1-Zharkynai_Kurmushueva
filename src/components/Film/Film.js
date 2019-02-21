import React, {Component} from 'react';
import './Film.css';

class Film extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Film] ShouldUpdate');
        return nextProps.name !== this.props.name ||
            nextProps.date !== this.props.date;
    }
  render() {
        return (
            <div className="Film">
                <h1 className="h1" >{this.props.name} </h1>
                <p className="text-primary">{this.props.dateTime}</p>
                <p><input
                    type="text"
                    value={this.props.name}
                    onChange={this.props.onChangeName}
                /></p>
                <p>{this.props.children}</p>
                <img alt="Delete" onClick={this.props.onRemoveFilm} className='del' src= 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-icon%2Ftrash-can_318-41524.jpg&f=1'></img>

            </div>
        )
    }
}

export default Film;