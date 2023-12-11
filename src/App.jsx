import { useState } from 'react';
import './App.css'

function App() {

  const [visivel1, setVisivel1] = useState(false)
  const toggleVisivel1 = () => {
    setVisivel1(!visivel1);
  }
  const [visivel2, setVisivel2] = useState(false)
  const toggleVisivel2 = () => {
    setVisivel2(!visivel2);
  }
  const [visivel3, setVisivel3] = useState(false)
  const toggleVisivel3 = () => {
    setVisivel3(!visivel3);
  }
  const [visivel4, setVisivel4] = useState(false)
  const toggleVisivel4 = () => {
    setVisivel4(!visivel4);
  }

  return (
    <>
      <div>
        <img className='fundo' src="background-pattern-desktop.svg" alt="imagem de fundo"/>
      </div>

      <div className="card">

        <div className="titulo">
          <img src="icon-star.svg" alt="icone estrela"/>
            <h1>FAQs</h1>
        </div>

        <div className="perguntas">
          <h4>What is Frontend Mentor, and how will it help me?</h4>
          <button onClick={toggleVisivel1}><img src={( !visivel1 ? "icon-plus.svg" : "icon-minus.svg")} alt="botão mais"/></button>
        </div>
        {visivel1 && (
        <p>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.</p>)}
        
        <div className="perguntas">
          <h4>Is Frontend Mentor free?</h4>
          <button onClick={toggleVisivel2}><img src={( !visivel2 ? "icon-plus.svg" : "icon-minus.svg")} alt="botão mais"/></button>
        </div>
        {visivel2 && (
        <p>Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a
          range of projects suitable for all skill levels.</p>)}
        
        <div className="perguntas">
          <h4>Can I use Frontend Mentor projects in my portfolio?</h4>
          <button onClick={toggleVisivel3}><img src={( !visivel3 ? "icon-plus.svg" : "icon-minus.svg")} alt="botão mais"/></button>
        </div>
        {visivel3 && (
        // eslint-disable-next-line react/no-unescaped-entities
        <p>Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your
          skills to potential employers!</p>)}
        
        <div className="perguntas">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h4>How can I get help if I'm stuck on a Frontend Mentor challenge?</h4>
          <button onClick={toggleVisivel4}><img src={( !visivel4 ? "icon-plus.svg" : "icon-minus.svg")} alt="botão mais"/></button>
        </div>
         {visivel4 && (
         // eslint-disable-next-line react/no-unescaped-entities
         <p>The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can
          ask questions and seek support from other community members.</p>)}
      </div>
    </>
  )
}

export default App
