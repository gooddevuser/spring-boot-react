import React from 'react';

const ControlPanel = ({ onAddFormClick }) => {    

    return(
        <div>
            <div className="input-group input-group-lg">
                <span className="input-group-btn">
                    <button className="btn btn-primary" 
                            type="button"
                            onClick={ onAddFormClick }>
                        <i className="fa fa-plus"></i>
                    </button>
                </span>
                <input type="text" className="form-control" placeholder="Search for note by title ..." />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </span>
            </div>        
        </div>
    );
}

export default ControlPanel;