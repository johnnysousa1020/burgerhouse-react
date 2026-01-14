import sobreimg from "../assets/fachada.jpg"
import "./Sobre.css"


function Sobre(){
    return(
        <section className="sobre" id="sobre">
            <h2>Sobre a BurgerHouse</h2>

            <div className="sobre-wrapper">
                <div className="sobre-imagem">
                    <img src={sobreimg} alt="Hambúrguer artesal BurgerHouse" />
                </div>

                <div className="sobre-cards">
                    <div className="sobre-card">
                        <h3>🔥 Qualidade</h3>
                        <p>
                            Trabalhamos com carnes selecionadas e ingredientes sempre frescos.
                        </p>
                    </div>

                    <div className="sobre-card">
                        <h3>🍔 Artesanal</h3>
                        <p>
                            Hambúrgueres preparados na chapa, com receitas exclusivas.
                        </p>
                    </div>

                    <div className="sobre-card">
                        <h3>⭐ Experiência</h3>
                        <p>
                            Muito mais que comida, entregamos sabor e experiência.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobre;