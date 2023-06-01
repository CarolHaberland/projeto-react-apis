import React from 'react'

export const Modal = ({shown, close}) => {
    return shown ? (
        <div
          className="modal-backdrop"
          onClick={() => {
            // close modal when outside of modal is clicked
            close();
          }}
        >
          <div
            className="modal-content"
            onClick={e => {
              // do not close modal if anything inside modal content is clicked
              e.stopPropagation();
            }}
          >
            {/* <button onClick={close}>Close</button> */}
            <h1 style={{fontSize:"40px"}}>Gotcha!</h1>
            <h2>O Pokémon foi adicionado a sua Pokédex.</h2>
          </div>
        </div>
      ) : null;
}

export const ModalSoltar = ({shown, close}) => {
    return shown ? (
        <div
          className="modal-backdrop"
          onClick={() => {
            // close modal when outside of modal is clicked
            close();
          }}
        >
          <div
            className="modal-content"
            onClick={e => {
              // do not close modal if anything inside modal content is clicked
              e.stopPropagation();
            }}
          >
            {/* <button onClick={close}>Close</button> */}
            <h1 style={{fontSize:"40px"}}>Oh, no!</h1>
            <h2>O Pokémon foi removido da sua Pokedéx.</h2>
          </div>
        </div>
      ) : null;
}
