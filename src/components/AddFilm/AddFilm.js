import React, {  } from 'react';


function AddFilm(props) {

    return (
        <div className="AddFilm">
            <form>
                <input
                    type="text"
                    value={props.name}
                    onChange={props.onChangeInput}
                />
            </form>
            <div className='d-inline'>
                <button onClick={props.onAddFilm}>
                    Add
                </button>
            </div>
        </div>
    )
}


export default AddFilm