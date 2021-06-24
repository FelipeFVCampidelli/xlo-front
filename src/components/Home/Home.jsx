import { Link } from 'react-router-dom';

import './Home.css'
import Logo from '../../assets/xlo.png';
import LogoVariant from '../../assets/xlo-variacao.png';

export default function Home() {
  return (
    <div className="Home">
      <div className="Header">
        <div className="flex-title">
          <img src={Logo} 
            alt="logo"
            width="120px"
            height="160px"
            padding="0"
          />
        </div>
        <div className="flex-button">
          <Link to="/login">
            <button className="login-button">
              Login
            </button>
          </Link>
        </div>
    </div>
    <div className="Conteudo">
      <figure>
        <img id="LogoV"
          alt="Logo Variant"
          src={LogoVariant}
          width="300px"
          height="150px"
        />
          <figcaption>O maior e mais original site de compras imaginário de todo o Brasil!</figcaption>
      </figure>
      </div>
    </div>
  )
}
