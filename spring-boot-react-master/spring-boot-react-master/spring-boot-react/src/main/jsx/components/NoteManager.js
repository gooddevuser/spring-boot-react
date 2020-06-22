import React, { useState, useEffect } from 'react';

import Modal from 'react-modal';

import ControlPanel from './ControlPanel';
import AddNoteForm from './AddNoteForm';
import EditNoteForm from './EditNoteForm';
import NoteList from './NoteList';

import axios from 'axios';

const NoteManager = (props) => {

    Modal.setAppElement('#root');

    const [ addFormOpened, setAddFormOpened ] = useState(false);
    const [ editFormOpened, setEditFormOpened ] = useState(false);
    const [ notes, setNotes ] = useState([]);
    const [ noteForEdit, setNoteForEdit ] = useState(null);

    const addFormClickHandler = () => {
        setAddFormOpened(true);
    }
    const closeFormHandler = (form) => {
        if ( form === "add" ) {
            setAddFormOpened(false);
        } else if ( form === "edit" ) {
            setEditFormOpened(false);
        }
    }
    
    const addNoteHandler = (note) => {
        setAddFormOpened(false);

        axios.post("/note/add", note)
             .then( (response) => {
                //console.log(response.data);
                loadNotes();
                //alert('등록했습니다.');
             })
             .catch( (err) => {
                 console.log(err);
             });
        
    }

    const loadNotes = () => {

        axios.get("/note/list")
             .then( (response) => {
                 //console.log(JSON.stringify(response.data));
                 setNotes(response.data);
             })
             .catch( (err) => {
                 console.log(err);
             });

    }

    const deleteNoteHandler = (id) => {

        const yes = confirm(`${ id }번 게시글을 삭제할까요?`);

        if (yes) {
            axios.delete(`/note/delete/${ id }`)
                 .then( (response) => {
                    loadNotes();
                    //alert(`${ id }번 게실글을 삭제했습니다.`);
                 })
                 .catch( (err) => {
                     console.log(err);
                 });
        }

    }

    const editNoteHandler = (id) => {

        const searchedNotes = notes.filter( (note) => note.id === id )
        if (!searchedNotes) { // null or undefined or length == 0
            alert(`${ id }번 게시물을 찾을 수 없습니다.`);
            return;
        }

        const searchedNote = searchedNotes[0];

        setNoteForEdit(searchedNote);
        setEditFormOpened(true);

    }

    const updateNoteHandler = (note) => {

        axios.put('/note/update', note)
             .then( (response) => {
                setEditFormOpened(false);
                loadNotes();
             })
             .catch( (err) => {
                console.log(err);
             });

    }

    // mount, 조건부 rerendering 시점에 호출
    useEffect( () => {
        loadNotes();
    }, []);

    return (
        <div>
            <Modal isOpen={ addFormOpened }>
                <AddNoteForm onCloseForm={ closeFormHandler }
                             onAddNote={ addNoteHandler } />
            </Modal>
            <Modal isOpen={ editFormOpened }>                
                <EditNoteForm noteForEdit={ noteForEdit }
                              onCloseForm={ closeFormHandler }
                              onUpdateNote={ updateNoteHandler } />
            </Modal>
            <div className="mb-3">
                <ControlPanel onAddFormClick={ addFormClickHandler } />
            </div>
            <NoteList notes={ notes } 
                      onDeleteNote={ deleteNoteHandler }
                      onEditNote={ editNoteHandler } />

        </div>
    );
}

export default NoteManager;