import React from 'react'

import { Helmet } from 'react-helmet'

import './lista2.css'

const Lista2 = (props) => {
  return (
    <div className="lista2-container1">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="lista2-lista2">
        <div className="lista2-lista">
          <div className="lista2-default1">
            <span className="lista2-text1">Redes sociais</span>
          </div>
          <div className="lista2-default2">
            <span className="lista2-text2">Site</span>
          </div>
          <div className="lista2-default3">
            <span className="lista2-text3">Indicações de amigos / Parente</span>
          </div>
          <div className="lista2-default4">
            <span className="lista2-text4">Já fui a um evento</span>
          </div>
        </div>
      </div>
      <a href="https://play.teleporthq.io/signup" className="lista2-link">
        <div aria-label="Sign up to TeleportHQ" className="lista2-container2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lista2-icon1"
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
          <span className="lista2-text5">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Lista2
