import "./Header.css"

function Header(){
    return(
        <header className="header">
            <div className="container">
                <h1 className="logo">BurgerHouse</h1>

                <nav className="nav">
                    <a href="#home">Inicio</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#cardapio">Cardapio</a>
                    <a href="#destaque">Destaque</a>
                    <a href="#contato">Contato</a>
                </nav>
            </div>
        </header>
    )
}


export default Header;