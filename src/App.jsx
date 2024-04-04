// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Modal from "./components/Modal";
import ContentModal from "./components/ContentModal";

import './App.css';

export default function App() {
  const [modal, setModal] = useState(true);
  const closeModal = () => {
    if(!modal) {
      console.log("cliquei", modal)
      setModal(!modal)
    } else {
      return
    }
  }
  const stopPropagation = (e) => e.stopPropagation();
  return (
    <>
        <div className="container-modal" onClick={(closeModal)}>
          { modal ?
            <Modal modal={modal} setModal={setModal} /> 
            :
            <div onClick={stopPropagation}>
              <ContentModal modal={modal} setModal={setModal} />
            </div>
          }
        </div>
    </>
  )
}


