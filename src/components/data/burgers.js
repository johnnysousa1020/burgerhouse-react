import bacon from "../../assets/bacon.jpg"
import batata from "../../assets/batata.jpg"
import bbq from "../../assets/bbq.jpg"
import burger from "../../assets/burger.jpg"
import cheddar from "../../assets/cheddar.jpg"
import cheese from "../../assets/cheese.jpg"
import chicken from "../../assets/chicken.jpg"
import chocolate from "../../assets/chocolate.jpg"
import double from "../../assets/double.jpg"
import house from "../../assets/house.jpg"
import morango from "../../assets/morango.jpg"
import onion from "../../assets/onion.jpg"
import refri from "../../assets/refri.jpg"
import smah from "../../assets/smah.jpg"

const burgers = [
    {
        id: 1,
        nome: "Cheese Burger",
        descricao: "Pão brioche, carne 180g e cheddar.",
        preco: "R$ 29,90",
        imagem: cheese,
        categoria: "burger",
    },
    {
        id: 2,
        nome: "Bacon Burger",
        descricao: "Hambúrguer artesanal com bacon crocante.",
        preco: "R$ 34,90",
        imagem: bacon,
        categoria: "burger",
    },
    {
        id: 3,
        nome: "Double Burger",
        descricao: "Dois hambúrgueres e queijo duplo.",
        preco: "R$ 39,90",
        imagem: double,
        categoria: "burger",
    },
    {
        id: 4,
        nome: "Smash Burger",
        descricao: "Carne smash, cebola roxa e molho especial.",
        preco: "R$ 32,90",
        imagem: smah,
        categoria: "burger",
    },
    {
        id: 5,
        nome: "BBQ Burger",
        descricao: "Molho barbecue, bacon e cheddar.",
        preco: "R$ 36,90",
        imagem: bbq,
        categoria: "burger",
    },
    {
        id: 6,
        nome: "Chicken Burger",
        descricao: "Frango empanado e maionese da casa.",
        preco: "R$ 31,90",
        imagem: chicken,
        categoria: "burger",
    },
    {
        id: 7,
        nome: "Veggie Burger",
        descricao: "Hambúrguer vegetariano artesanal.",
        preco: "R$ 30,90",
        imagem: burger,
        categoria: "burger",
    },
    {
        id: 8,
        nome: "House Burger",
        descricao: "O carro-chefe da casa com molho especial.",
        preco: "R$ 38,90",
        imagem: house,
        categoria: "burger",
        destaque: true,
    },

    // Acompanhamentos

    {
        id: 9,
        nome: "Batata Frita",
        descricao: "Batatas crocantes e sequinhas.",
        preco: "R$ 14,90",
        imagem: batata,
        categoria: "side",
    },
    {
        id: 10,
        nome: "Batata Cheddar & Bacon",
        descricao: "Batata frita com cheddar cremoso e bacon.",
        preco: "R$ 19,90",
        imagem: cheddar,
        categoria: "side",
    },
    {
        id: 11,
        nome: "Onion Rings",
        descricao: "Anéis de cebola empanados.",
        preco: "R$ 17,90",
        imagem: onion,
        categoria: "side",
    },

    // BEBIDAS

    {
        id: 12,
        nome: "Refrigerante",
        descricao: "Lata 350ml.",
        preco: "R$ 6,90",
        imagem: refri,
        categoria: "drink",
    },
    {
        id: 13,
        nome: "Milkshake",
        descricao: "Chocolate.",
        preco: "R$ 16,90",
        imagem: chocolate,
        categoria: "drink",
    },
    {
        id: 14,
        nome: "Milkshake",
        descricao: "Morango.",
        preco: "R$ 16,90",
        imagem: morango,
        categoria: "drink",
    },
]

export default burgers;