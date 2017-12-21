import React, { Component } from 'react';
import { test } from '../actions';

class Root extends Component {

    render() {
        test();
        console.log('huy');

        return(
            <div>
                <h1 className='text'>Hello World</h1>
            </div>
        );

    }

}

export default Root;