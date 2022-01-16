const image = document.querySelector("img");
const botao = document.querySelector("button");
const nomeDoPersonagem = document.querySelector("#nome");
const especie = document.querySelector("#especie");
const condicao = document.querySelector("#status");

const gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
};

const pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    fetch("https://rickandmortyapi.com/api/character/", {
        method: "GET",
    })
        .then((response) => response.json())
        .then((json) => {
            const container = document.querySelector(".container");
            json.results.map(function (results) {
                container.innerHTML += `
             <div><img src=${results.image} > </div>
             <ul id="detalhes-container">
                    <li>
                        Nome:
                        <p id="nome">${results.name}</p>
                    </li>
                    <li>
                        Especie:
                        <p id="especie">${results.species}</p>
                    </li>
                    <li>
                        Está Vivo?
                        <p id="status">${results.status}</p>
                    </li>
                </ul>

             <hr>
             `;
            });
        });
};