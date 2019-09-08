import React, { Component } from 'react';
import Header from './header';
import MoviesFindAndList from './findAndList'

class ContentComponents extends Component {
    render() { 
        return ( 
            <div>
                <Header />;
                <MoviesFindAndList />                
            </div>
        );
    }
}
 
export default ContentComponents;