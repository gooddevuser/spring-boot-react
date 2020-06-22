import React from 'react';

import Header from './Header';

import NoteManager from './NoteManager';

const App = (props) => {

    return (
        <>
            <Header />
            <div className="container mt-5">
                <NoteManager />
            </div>
        </>
    );

}

export default App;