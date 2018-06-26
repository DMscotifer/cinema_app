import React, {Component} from 'react';

class Film extends Component {
    render() {
        return(
            <div className='film'><a href="" className='title'>{this.props.title}</a> <a href="" className='showtimes'>Showtimes</a></div>
        )
    }
}

export default Film;
