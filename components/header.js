import Image from "next/image";
import React, { useState } from "react";

const background = {
  width: "100%",
  height: "65px",
  background: "linear-gradient(0deg,rgba(2,0,36,1) 0,rgba(40,89,200,1) 0,rgba(22,71,181,1) 100%)",
  position: "fixed",
  top: "0",
  zIndex: "200",
};

const backgroundSpace = {
  width: "100%",
  height: "65px",
};

export default function Header() {
  const [menuClick, setMenuClick] = useState(true);
  function clickMenu(e) {
    if (menuClick) {
      setMenuClick(false);
    } else {
      setMenuClick(true);
    }
  }

  const [findClick, setfindClick] = useState(false);
  function clickFind(e) {
    if (findClick) {
      setfindClick(false);
    } else {
      setfindClick(true);
    }
  }

  function textSearch(e) {
    if (e.key === "Enter") {
      window.location.href = location.origin + "/page/1/search/" + e.target.value;
    }
  }

  return (
    <>
      <div style={backgroundSpace}></div>
      <div style={background}>
        <div style={{ maxWidth: "1120px" }} className="font-sabado conteud-header">
          <div style={findClick ? { transform: "translate(-107px,-21px) !important" } : null} className={findClick ? "logoHeader arrasta" : "logoHeader"}>
            <a href="/">
              <Image height="110px" width="110px" src="/assets/avatarfluxo.png" alt="Logo segue o fluxo" />
            </a>
          </div>
          <nav className="nav-header">
            <a href="/">Inicio</a>
            <a href="https://open.spotify.com/playlist/0TNsKRkilGp0VQHQY5Z8C1?utm_source=embed_v2&go=1&play=1&nd=1" target="_blank">
              Playlist
            </a>
            <a href="/sobre">Sobre</a>
            <a href="/contato">Contato</a>
          </nav>

          <nav className="nav-mobile">
            <svg
              style={findClick ? { display: "none" } : { display: "block" }}
              onClick={clickMenu}
              className="menu-mobile"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
            <div style={findClick ? { display: "block" } : { display: "none" }} className="buscador-header">
              <input onKeyDown={textSearch} placeholder="Faça sua busca..."></input>
            </div>

            <div className="pesquisar-svg">
              <svg onClick={clickFind} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
          </nav>
        </div>
      </div>

      <div>
        <nav className={menuClick ? "menu-list-mobile menu-list-hide" : "menu-list-mobile menu-list-show"}>
          <div className="logo-and-close">
            <div style={{ marginTop: "-20px" }}>
              <a style={{ border: "none" }} href="/">
                <Image height="130px" width="130px" src="/assets/avatarfluxo.png" alt="Logo segue o fluxo" />
              </a>
            </div>
            <button onClick={clickMenu}>X</button>
            <div></div>
          </div>
          <div className="pesquisador-header">
            <input style={{ height: "45px" }} onKeyDown={textSearch} placeholder="Faça sua busca..."></input>
          </div>
          <a href="/">Inicio</a>
          <a href="https://open.spotify.com/playlist/0TNsKRkilGp0VQHQY5Z8C1?utm_source=embed_v2&go=1&play=1&nd=1" target="_blank">
            Playlist
          </a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>

          <div>
          <div className="redes-header">
              <ul className="ul-header">
                <li>
                  <a target="_blank"   href="https://open.spotify.com/playlist/0TNsKRkilGp0VQHQY5Z8C1">
                
                    <Image className="image-li-footer" height="25%" width="25%" src="/assets/spotify.svg" alt="Spotify" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/segueofluxooriginal/">
                   
                    <Image className="image-li-footer" style={{ objectFit: "contain" }} height="25%" width="25%" src="/assets/instagram.svg" alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.youtube.com/segueofluxooriginal">
                    <Image className="image-li-footer" style={{ objectFit: "contain" }} height="25%" width="25%" src="/assets/youtube.svg" alt="Youtube" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.facebook.com/segueofluxooriginal">
            
                    <Image className="image-li-footer" style={{ objectFit: "contain" }} height="25%" width="25%" src="/assets/facebook.svg" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/segueofluxonews">
          
                    <Image className="image-li-footer" style={{ objectFit: "contain" }} height="25%" width="25%" src="/assets/twitter.svg" alt="twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
