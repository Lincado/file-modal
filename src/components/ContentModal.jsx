// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFacebookMessenger, FaTelegram, FaTwitter, FaWhatsapp, FaMailBulk, FaPlus, FaRegCopy } from "react-icons/fa";
import PropTypes from "prop-types";

import ButtonClose from "./ButtonCloseModal";
import "../css/contentModal.css";
// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default function contentModal({ modal, setModal }) {
  return (
    <>
        <div className="content-modal">
          <header className="content-header">
            <p>Share with</p>
            <ButtonClose modal={modal} setModal={setModal} />
          </header>
          <div className="icons-shares">
            <div className="icon-content">
              <span>
                <FaFacebookMessenger className="icon" />
              </span>
              <p>Messenger</p>
            </div>
            <div className="icon-content">
              <span>
                <FaTelegram className="icon" />
              </span>
              <p>Telegram</p>
            </div>
            <div className="icon-content">
              <span>
                <FaTwitter className="icon" />
              </span>
              <p>Twitter</p>
            </div>
            <div className="icon-content">
              <span>
                <FaWhatsapp className="icon" />
              </span>
              <p>Whatsapp</p>
            </div>
            <div className="icon-content">
              <span>
                <FaMailBulk className="icon" />
              </span>
              <p>E-mail</p>
            </div>
            <div className="icon-content">
              <span>
                <FaPlus className="icon" />
              </span>
              <p>More</p>
            </div>

          </div>
          <div className="share-link">
            <p>Or share with link</p>
            <div className="link">
              <span>https://www.figma.com/file/NlfVhYygR9mAQasassdsada/Share...</span>
              <FaRegCopy className="icon-copy" />
            </div>
          </div>
        </div>
    </>
  )
}

contentModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired
}