import Image from "next/image";

export default function Playlist() {
  return (
    <>

    <div className="conteudo-playlist"> 
    <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/9038315062" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/1.svg" alt="Data"></Image>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/2.svg" alt="Data"></Image>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/3.svg" alt="Data"></Image>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/4.svg" alt="Data"></Image>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/5.svg" alt="Data"></Image>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/6.svg" alt="Data"></Image>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/7.svg" alt="Data"></Image>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/8.svg" alt="Data"></Image>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/9.svg" alt="Data"></Image>
    </div>
    </>
  );
}
