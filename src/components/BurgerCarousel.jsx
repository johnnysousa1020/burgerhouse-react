import { useRef, useState } from "react";
import "./BurgerCarousel.css"
import burgers from "./data/burgers";
import BurgerCard from "./BurgerCard";

function BurgerCarousel(){
    const carouselRef = useRef(null)
    const [categoriaAtiva, setCategoriaAtiva] = useState("todos")
    
    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            left: -300,
            behavior: "smooth",
        })
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            left: 300,
            behavior: "smooth",
        })
    };

    const itensFiltrados = (
        categoriaAtiva === "todos"
        ? burgers
        : burgers.filter(item => item.categoria === categoriaAtiva)
    )

    return(
        <section className="burger-section" id="cardapio">
            <h2>Nosso Cardápio</h2>

            <div className="burger-filters">
                <button onClick={() => setCategoriaAtiva("todos")}>Todos</button>
                <button onClick={() => setCategoriaAtiva("burger")}>Burgers</button>
                <button onClick={() => setCategoriaAtiva("side")}>Acompanhamentos</button>
                <button onClick={() => setCategoriaAtiva("drink")}>Bebidas</button>
            </div>

        <div className="burger-carousel">
            <button className="arrow left" onClick={scrollLeft}>
                ⇐
            </button>

            <div className="carousel-container" ref={carouselRef}>
                {itensFiltrados.map(item => (
                    <BurgerCard 
                    key={item.id}
                    imagem={item.imagem}
                    nome={item.nome}
                    descricao={item.descricao}
                    preco={item.preco}/>
                ))}
            </div>

            <button className="arrow right" onClick={scrollRight}>
                ⇒
            </button>
        </div>
        </section>
    )
}


export default BurgerCarousel;