import styles from "../styles/Footer.module.css";
import Image from "next/image";

var styleFooter = {
  maxWidth: "1020px",
  margin: "auto",
  padding: "50px 22px",
  fontSize: "16px",
  display: "flex",
  justifyContent: "space-between",
};

var StyleText = {
  color: "rgb(212, 209, 209)",
};

var StyleTextFull = {
  color: "white",
  fontSize: "20px",
};

var styleBackground = {
  background: "#121214",
  position: "absolute",
  right: 0,
  left: 0,
};

export default function Footer() {
  return (
    <>
      <h2>
        {" "}
        <footer style={styleBackground}>
       
          <div style={styleFooter} className="footer-div">
            <div className="redes-footer">
              <ul className="ul-footer">
                <li>
                  <a target="_blank"   href="https://open.spotify.com/playlist/0TNsKRkilGp0VQHQY5Z8C1">
                  <img className="image-li-footer" alt="Spotify"  height="25%" width="25%" src="https://api.segueofluxo.com/wp-content/uploads/2021/05/spotify.png"></img>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/segueofluxooriginal/">
                  <img className="image-li-footer" alt="Instagram"  height="25%" width="25%" src="https://api.segueofluxo.com/wp-content/uploads/2021/05/instagram.png"></img>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.youtube.com/segueofluxooriginal">
                  <img className="image-li-footer" alt="Youtube"  height="25%" width="25%" src="https://api.segueofluxo.com/wp-content/uploads/2021/05/youtube.png"></img>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.facebook.com/segueofluxooriginal">
                  <img className="image-li-footer" alt="Facebook"  height="25%" width="25%" src="https://api.segueofluxo.com/wp-content/uploads/2021/05/facebook1.png"></img>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/segueofluxonews">
                  <img className="image-li-footer" alt="Twitter"  height="25%" width="25%" src="https://api.segueofluxo.com/wp-content/uploads/2021/05/twitter1.png"></img>
                  </a>
                </li>
              </ul>
            </div>
            <p className="font-bebas font-size" style={StyleTextFull}>
              {" "}
              © 2021, SEGUE O FLUXO - TODOS OS DIREITOS RESERVADOS.{" "}
            </p>
          </div>
        </footer>
      </h2>
    </>
  );
}
