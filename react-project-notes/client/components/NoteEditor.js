import React, {Component} from 'react';
import './NoteEditor.css';

const NoteEditor = ({onInputChange, onFormSubmit}) => (
            <form className="NoteEditor">
                     <input  type="number"
                        className='NoteEditor__title hidden'
                        
                        name="id"
                        onChange={onInputChange}
                        />
                <input  type="text"
                        className='NoteEditor__title'
                        placeholder='Enter title'
                        name="title"
                        onChange={onInputChange}
                        />
                <input  type="text"
                        className='NoteEditor__title'
                        placeholder='Enter name'
                        name="name"
                        onChange={onInputChange}
                        />
                <textarea   placeholder="Enter text"
                            rows={3}
                            className="NoteEditor__text"
                            name="text"
                            onChange = {onInputChange}
                            />
                <div className="NoteEditor__color">
                        <span>Choose color for note: </span>         
                        <label className="NoteEditor__color-item">
                                <input type="radio"
                                name="color"
                                />
                                <span className="color-item color_cfc"></span>
                        </label>
                        <label className="NoteEditor__color-item">
                                <input type="radio"
                                name="color"
                                />
                                <span className="color-item color_ffc"></span>
                        </label>
                        <label className="NoteEditor__color-item">
                                <input type="radio"
                                name="color"
                                />
                                <span className="color-item color_ccf"></span>
                        </label>
                        <label className="NoteEditor__color-item">
                                <input type="radio"
                                name="color"
                                />
                                <span className="color-item color_b5f6fc"></span>
                        </label>
                        <label className="NoteEditor__color-item">
                                <input type="radio"
                                name="color"
                                />
                                <span className="color-item color_fcc2e5"></span>
                        </label>
                </div>          
                           
                <div className="NoteEditor__footer">
                    <button className="NoteEditor__button"
                            onClick={onFormSubmit}>
                            Add
                    </button>
                </div>
            </form>
            )

export default NoteEditor;