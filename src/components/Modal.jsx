// eslint-disable-next-line no-unused-vars
import React from "react";
import {FaShare} from "react-icons/fa";
import PropTypes from "prop-types"


import "../css/modal.css"

// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default function Modal({modal, setModal}){
  return (
    <>
      <button className="share" onClick={()=> setModal(!modal)}>
        Share
        <FaShare className="icon-share"/>
      </button>
    </>
  )
}

Modal.propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired
}