import React, {Component, Fragment} from 'react';
import './Movie.css';
import AddFilm from '../../components/AddFilm/AddFilm.js'
import Film from '../../components/Film/Film.js';



class Movie extends Component {
    state = {
        films: [
            {name: 'Kyzyl Alma', dateTime: 20190221 , id: '1'},
            {name: 'Sunduk predkov', dateTime: 20190221, id: '2'},
            {name: 'Akkeme', dateTime: 20190221, id: '3'},
        ],
        currentFilm: {name: '', dateTime: ''},
        showFilms: true
    };



    changeName = (id, event) => {
        console.log(event);

        let filmId = this.state.films.findIndex(film => {
            return film.id === id;
        });

        let film = {
            ...this.state.films[filmId],
            name: event.target.value
        };

        let films = [...this.state.films];
        films[filmId] = film;

        this.setState({
            ...this.state,
            films
        })
    };



    removeFilm = (id,event) => {
        let filmId = this.state.films.findIndex(film => {
            return film.id === id;
        });

        const films = [...this.state.films];
        films.splice(filmId, 1);

        this.setState({
            ...this.state,
            films,
            currentFilm: {name: ''}
        });
    };


    getFilms = () => {
        if (this.state.films) {
            return <div>
                { this.state.films.map((film) => {
                        return <Film
                            key={film.id}
                            name={film.name}
                            date={film.dateTime}
                            onChangeName={(event) => this.changeName(film.id, event)}
                            onRemoveFilm={(event) => this.removeFilm(film.id)}
                        >
                            {film.dateTime} :  {film.name}
                        </Film>;
                    })
                }
            </div>
        } else {
            return null;
        }
    };

    changeFilmInput = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        if(name==='name') {
            if (value.length > 0) value = parseInt(value);
        }
        let currentFilm = {
            ...this.state.currentFilm,
            [name]: value
        };
        this.setState({
            ...this.state,
            currentFilm
        });
    };

    addFilm = (event) => {
        event.preventDefault();
        let film = {...this.state.currentFilm};
        const now = new Date();
        film.id = now.getTime();
        let films = [...this.state.films, film];
        this.setState({
            ...this.state,
            films,
            currentFilm: {name: '', dateTime: ''}
        });
    };



 render() {
        console.log(this.state);
        return (
            <Fragment>
              <div className="Movie">
                    <h2>Добавить новый фильм</h2>
                    <AddFilm
                        film={this.state.currentFilm}
                        onChangeInput={this.changeFilmInput}
                        onAddFilm={this.addFilm}
                         />

                {this.getFilms()}

                </div>
            </Fragment>
        );
    }
}


export default Movie