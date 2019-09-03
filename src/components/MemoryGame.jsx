"use strict";

import React, { Component } from 'react';
import MemoryGameTable from './MemoryGameTable';

class MemoryGame extends Component {
    state = {  }
    render() {
        return (
            <div className="container">
                <MemoryGameTable />
            </div>
         );
    }
}

export default MemoryGame;