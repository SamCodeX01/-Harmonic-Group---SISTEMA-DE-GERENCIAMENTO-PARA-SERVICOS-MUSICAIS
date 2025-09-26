import React from 'react'

import { Helmet } from 'react-helmet'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container1">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="component1-component1">
        <img
          src="/rectangle1116-7xl5-300h.png"
          alt="Rectangle1116"
          className="component1-rectangle1"
        />
        <img
          src="/logotipo300px1117-tri-200h.png"
          alt="Logotipo300px1117"
          className="component1-logotipo300px1"
        />
        <span className="component1-text1 Montserratmenu">Sobre</span>
        <span className="component1-text2 Montserratmenu">Serviços</span>
        <span className="component1-text3 Montserratmenu">Orçamentos</span>
        <span className="component1-text4 Montserratmenu">Contato</span>
        <span className="component1-text5 Montserratmenu">
          Seja um parceiro
        </span>
        <span className="component1-text6">Home</span>
      </div>
      <a href="https://play.teleporthq.io/signup" className="component1-link">
        <div
          aria-label="Sign up to TeleportHQ"
          className="component1-container2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="component1-icon1"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="component1-text7">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Component1
