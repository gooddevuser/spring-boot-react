import React, { useState } from 'react';

const EditNoteForm = ({ noteForEdit, onCloseForm, onUpdateNote }) => {

    const [ id, setId ] = useState(noteForEdit.id);
    const [ title, setTitle ] = useState(noteForEdit.title);
    const [ content, setContent ] = useState(noteForEdit.content);
    const [ tags, setTags ] = useState(noteForEdit.tags);

    const submitHandler = (e) => {

        e.preventDefault();
        
        onUpdateNote({ id, title, content, tags });

    }

    return (
        <div className="card card-body">
            <div className="mb-2">        
                <span className="h4 my-auto"><i className="fa fa-file-text-o fa-lg"></i> Edit Note</span>
                <a className="float-right ml-auto"
                   onClick={ (e) => onCloseForm("edit") }>
                    <i className="fa fa-remove mr-2 fa-2x text-danger"></i>
                </a>
            </div>
            
            <form className="mt-2" onSubmit={ submitHandler }>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" autoFocus 
                           name="title"
                           value={ title }
                           onChange={ (e) => setTitle(e.target.value) } />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea className="form-control" name="content" rows="3"
                              value={ content }
                              onChange={ (e) => setContent(e.target.value) }></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="tags">Tags</label>
                    <input type="text" className="form-control" name="tags"
                           value={ tags }
                           onChange={ (e) => setTags(e.target.value) } />
                </div>
                <div className="form-group row">
                    <div className="col-sm-4 col-md-3 col-xl-2 ml-auto">
                        <button type="submit" className="btn btn-success btn-block">
                            <i className="fa fa-save mr-2"></i>Save
                        </button>
                    </div>
                    <div className="col-sm-4 col-md-3 col-xl-2">
                        <button className="btn btn-danger btn-block mt-2 mt-sm-0" 
                                type="button"
                                onClick={ (e) => onCloseForm('edit') }>
                            <i className="fa fa-remove mr-2"></i>Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditNoteForm;