import "./BurgerCard.css"

function BurgerCard({ imagem, nome, descricao, preco }){
    return(
        <div className="burger-card">
            <img src={imagem} alt={nome} />

            <div className="burger-info">
                <h3>{nome}</h3>
                <p>{descricao}</p>
                <span>{preco}</span>
            </div>
        </div>
    )
}

export default BurgerCard;