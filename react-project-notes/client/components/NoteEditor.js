import React, {Component} from 'react';
import './NoteEditor.css';

const NoteEditor = ({onInputChange, onFormSubmit}) => (
            <div className="NoteEditor">
                <input  type="text"
                        className='NoteEditor__title'
                        placeholder='Enter title'
                       
                        onChange={onInputChange}
                        />
                <textarea   placeholder="Enter text"
                            rows={5}
                            className="NoteEditor__text"
                            
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