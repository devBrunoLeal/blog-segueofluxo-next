import Image from "next/image";
import React, { useState} from "react";

const background = {
  width: "100%",
  height: "65px",
  background:
    "linear-gradient(0deg,rgba(2,0,36,1) 0,rgba(40,89,200,1) 0,rgba(22,71,181,1) 100%)",
  position: 'fixed',
  top: '0',
  zIndex: '200'
};

const backgroundSpace = {
    width: "100%",
    height: "65px",
  };



export default function Header() {

    const [menuClick, setMenuClick] = useState(true);
    function clickMenu(e){
       if(menuClick){
           setMenuClick(false);
       }else{
           setMenuClick(true);
       }
    }

    const [findClick, setfindClick] = useState(false);
    function clickFind(e){
       if(findClick){
           setfindClick(false);
       }else{
           setfindClick(true);
       }
    }

    function textSearch(e){
        if (e.key === 'Enter') {
            window.location.href = location.origin+"/page/1/search/"+e.target.value
        }
    }


  return (
    <>
    <div style={backgroundSpace}></div>
      <div style={background}>
        <div style={{ maxWidth: "1120px" }} className="conteud-header">
          <div  className="logoHeader">
            <a href="/">
            <Image
              height="110px"
              width="110px"
              src="/assets/avatarfluxo.png"
              alt="Logo segue o fluxo"
            /></a>
          </div>
          <nav className="nav-header">
            <a>Inicio</a>
            <a>Playlist</a>
            <a>Sobre</a>
            <a>Contato</a>
          </nav>

          <nav className="nav-mobile">
          <svg style={findClick? {display: 'none'}:{display:'block'}} onClick={clickMenu} className="menu-mobile" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
           <div  style={findClick? {display: 'block'}:{display:'none'}} className="buscador-header">
              <input  onKeyDown={textSearch} placeholder="Faça sua busca..."></input>
           </div>

           <div  className="pesquisar-svg">
           <svg onClick={clickFind} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
           </div>
          </nav>
        </div>
      </div>

      <div style={menuClick? {display: 'none'}:{display:'block'}} className="headerMenu">
      <nav className="menu-list-mobile">
            <a>Inicio</a>
            <a>Playlist</a>
            <a>Sobre</a>
            <a>Contato</a>
          </nav>
      </div>
    </>
  );
}
