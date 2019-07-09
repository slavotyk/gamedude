import React from 'react';

import './ModalWindow.scss';

const ModalWindow = ({ title, content, buttons = [] }) => (
    <div className="overlay">
        <div className="modal-window">
            <h4 className="modal-window__title">{ title }</h4>
            { content && <p className="modal-window__title">{ content }</p> }
            {
                buttons.map(
                    ({ label, onClick }) => <button key={ label } className="modal-window__button" onClick={ onClick }>{ label }</button>
                )
            }
        </div>
    </div>
);

export default ModalWindow;