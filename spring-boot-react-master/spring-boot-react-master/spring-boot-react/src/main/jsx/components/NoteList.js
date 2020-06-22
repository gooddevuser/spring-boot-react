import React from 'react';

import Note from './Note';

const NoteList = ({ notes, onDeleteNote, onEditNote }) => {
    return (
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th></th>
                    <th className="align-middle text-center">제목</th>
                    <th className="align-middle text-center">내용</th>
                    <th className="align-middle text-center">수정일</th>
                </tr>
            </thead>
            <tbody>
                {
                    notes.map( (note) => <Note key={ note.id } 
                                               note={ note }
                                               onDeleteNote={ onDeleteNote }
                                               onEditNote={ onEditNote } /> )
                }
            </tbody>
        </table>
    );
}

export default NoteList;