import React, {Component} from 'react';
import './NoteEditor.css';

const NoteEditor = ({onInputChange, onFormSubmit}) => (
            <div className="NoteEditor">
                <input  type="text"
                        className='NoteEditor__title'
                        placeholder='Enter title'
                        name="title"
                        onChange={onInputChange}
                        />
                <textarea   placeholder="Enter text"
                            rows={3}
                            className="NoteEditor__text"
                            name="text"
                            onChange = {onInputChange}
                            />
                <div className="NoteEditor__footer">
                    <button className="NoteEditor__button"
                            onClick={onFormSubmit}>
                            Add
                    </button>
                </div>
            </div>
            )

export default NoteEditor;