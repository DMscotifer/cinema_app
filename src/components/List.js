import React, {Component} from 'react';
import Film from './Film.js'

class FilmList extends Component {
    render() {
        const films = this.props.films.map(film => {
            return <Film title={film.title} key={film.id} />
        })

        return(
            <div className='film-list'>
                    {films}
                    <a href="" className='link'>See more openings this week >></a>
            </div>
        )
    }
}

export default FilmList;
