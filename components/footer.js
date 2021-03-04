import styles from "../styles/Footer.module.css";

var styleFooter = {
    maxWidth: "1020px",
    margin: "auto",
    fontSize: '16px',
    display: "flex",
    justifyContent: 'space-between',
}

var StyleText = {
    color: "rgb(212, 209, 209)"
}

var StyleTextFull = {
    color: "white"
}


var styleBackground = {
    background: "#121214",
    position: "absolute",
    right:0,
    left: 0,
}




export default function Footer(){
    return (<>
    
     <h2> <footer style={styleBackground}>
    <div style={styleFooter} className="footer-div">
        <p style={StyleTextFull}> © 2021, SEGUE O FLUXO - TODOS OS DIREITOS RESERVADOS. </p>
        <p style={StyleTextFull}> Desenvolvido por <a style={StyleText} href="https://github.com/devBrunoLeal" target="_blank">Bruno Matheus</a> </p>
    </div>
</footer>
 </h2>
    </>)
}