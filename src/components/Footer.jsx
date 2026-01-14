import "./Footer.css"

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <h2>BurgerHouse</h2>
                    <p>Hambúrgueres artesanais feitos com paixão 🍔</p>
                </div>

                <div className="footer-social">
                    <h3>Siga a gente</h3>
                    <div className="social-links-footer">
                        <ul>
                        <li><a href="#" aria-label="WhatsApp">WhatsApp</a></li>
                        <li><a href="#" aria-label="Instagram">Instagram</a></li>
                        <li><a href="#" aria-label="Facebook">Facebook</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-info">
                    <h3>Contato</h3>
                    <p>São Paulo - SP</p>
                    <p>(11) 99999-9999</p>
                    <p>Ter a Dom - 18h às 23h</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>2026 BurgerHouse. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}


export default Footer