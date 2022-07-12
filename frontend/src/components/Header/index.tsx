import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta"/>
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://www.linkedin.com/in/herculano-getulio-guedes-178407106/">https://github.com/herculanogguedes</a>
                    </p>
            </div>
        </header>
    )
}

export default Header