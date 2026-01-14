import "./WhyUs.css"

function WhyUs(){
    return(
        <section className="whyus">
            <h2>Por que escolher a BurgerHouse?</h2>

            <div className="whyus-container">
                <div className="whyus-card">
                    <svg
                     xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M4 15h16a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                      <path d="M12 4c3.783 0 6.953 2.133 7.786 5h-15.572c.833 -2.867 4.003 -5 7.786 -5z" />
                      <path d="M5 12h14" />
                    </svg>
                    <h3>Carne Artesanal</h3>
                    <p>
                        Hambúrgueres preparados com carne 100% artesanal,
                        suculenta e de alta qualidade.
                    </p>
                </div>

                <div className="whyus-card">
                    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="50"
  height="50"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#ffffff"
  stroke-width="1"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M19 8h-14a6 6 0 0 0 6 6h2a6 6 0 0 0 6 -5.775l0 -.225z" />
  <path d="M17 20a2 2 0 1 1 0 -4a2 2 0 0 1 0 4z" />
  <path d="M15 14l1 2" />
  <path d="M9 14l-3 6" />
  <path d="M15 18h-8" />
  <path d="M15 5v-1" />
  <path d="M12 5v-1" />
  <path d="M9 5v-1" />
</svg>
                    <h3>Grelhado na Hora</h3>
                    <p>
                        Cada pedido é feito na hora, garantindo sabor, textura
                        e frescor incomparáveis
                    </p>
                </div>

                <div className="whyus-card">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  width="50"
  height="50"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#ffffff"
  stroke-width="1"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M7 4v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
  <path d="M17 8m-3 0a3 4 0 1 0 6 0a3 4 0 1 0 -6 0" />
  <path d="M17 12v9" />
</svg>
                    <h3>Ingredientes Selecionados</h3>
                    <p>
                        Utilizamos apenas ingredientes frescos e selecionados para
                        uma experiência única
                    </p>
                </div>

                <div className="whyus-card">
                    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -.993 .883l-.007 .117v5l.009 .131a1 1 0 0 0 .197 .477l.087 .1l3 3l.094 .082a1 1 0 0 0 1.226 0l.094 -.083l.083 -.094a1 1 0 0 0 0 -1.226l-.083 -.094l-2.707 -2.708v-4.585l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
</svg>
                    <h3>Entrega Rápida</h3>
                    <p>
                        Seu hambúrguer quentinho chega rápido até você, sem
                        perder a qualidade
                    </p>
                </div>
            </div>
        </section>
    )
}


export default WhyUs;