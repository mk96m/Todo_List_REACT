import React, { useState } from 'react';


function ToDoList(props) {
    return (
        <div className='list-item'>
            {props.item}
            <span class="material-symbols-outlined icon-delete"
                onClick={e => {
                    props.deleteItem(props.index)
                }}>
                delete
            </span>
        </div>
    );
}



export default ToDoList;