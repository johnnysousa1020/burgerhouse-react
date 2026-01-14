import "./Hero.css"

function Hero(){
    return(
        <section className="hero" id="home">
            <div className="hero-content">
                <h2>Os melhores burgers artesanais da cidade</h2>
                <p>
                    Hambúrgueres suculentos, ingredientes selecionados e muito sabor
                    em cada mordida.
                </p>
                <a href="#cardapio" className="hero-btn">Ver Cardápio</a>
            </div>
        </section>
    )
}


export default Hero;