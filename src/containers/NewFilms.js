import React, {Component} from 'react';
import List from '../components/List.js';
import Button from '../components/Button.js'

class NewFilms extends Component {

    render() {
        return(
            <div className='openings'>
            <p>UK Opening This Week</p>
            <List films={movies} />
            <hr />
            <Button />
            </div>

        )
    }
}

const movies = [
    {id: 1, title: 'Jurassic World: Fallen Kingdom'},
    {id: 2, title: 'Ocean\'s 8'},
    {id: 3, title: 'Sicario 2'},
    {id: 4, title: 'The Endless'},
    {id: 5, title: 'The First Purge'},
    {id: 6, title: 'Mary Shelley'},
]

export default NewFilms;
