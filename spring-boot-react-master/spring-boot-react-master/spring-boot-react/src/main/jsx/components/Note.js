import React from 'react';

const Note = ({ note, onDeleteNote, onEditNote }) => {

    const { id, title, content, updatedDate } = note;

    return (
        <tr>
            <td className="align-middle" style={{width: '80px'}}>
                <div className="d-flex flex-row">
                    <a data-toggle="tooltip" data-placement="top" 
                        title="Edit Note" className="p-2"
                        onClick={ (e) => onEditNote(id) }>
                        <i className="fa fa-pencil fa-lg text-primary"></i>
                    </a>
                    <a data-toggle="tooltip" data-placement="top" 
                        title="Delete Note" className="p-2"
                        onClick={ (e) => onDeleteNote(id) }>
                        <i className="fa fa-trash fa-lg text-danger"></i>
                    </a>
                </div>                
            </td>
            <td className="align-middle">{ title }</td>
            <td className="align-middle">
                <span className="d-inline-block text-truncate" style={{maxWidth: '200px'}}>
                    { content }
                </span>                
            </td>
            <td className="align-middle">{ updatedDate }</td>
        </tr>
    );
}

export default Note;