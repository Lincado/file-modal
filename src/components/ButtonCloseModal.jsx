// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types"

import "../css/buttonModal.css";

// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default function ButtonCloseModal ({modal, setModal}) {
  return (
    <>
    <button className="btn-close" onClick={()=> setModal(!modal)}> X </button>
    </>
  )
}

ButtonCloseModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired
}