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
        <Image className="image-li-footer" height="25%" width="25%" src="/assets/spotify.svg" alt="Spotify" />
          <div style={styleFooter} className="footer-div">
            <div className="redes-footer">
              <ul className="ul-footer">
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
