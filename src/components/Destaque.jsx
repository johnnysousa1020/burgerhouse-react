import "./Destaque.css"
import burgercasa from "../assets/burgercasa.jpg"

function Destaque(){
    return(         
        <section className="destaque" id="destaque">
            <div className="destaque-content">
                <span className="badge">Especial da Casa</span>

                <h2>BurgerHouse Supreme</h2>

                <p>
                    Pão brioche artesanal, blend especial 180g,
                    queijo cheddar derretido, bacon crocante e
                    molho exclusivo da casa
                </p>

                <div className="destaque-preco">
                    <span>R$ 39,90</span>
                </div>
                
                <button className="destaque-btn">
                    Pedir agora
                </button>
            </div>

            <div className="destaque-image">
                <img src={burgercasa} alt="Burger destaque" />
            </div>
        </section>
    )
}


export default Destaque;