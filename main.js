import { series } from "./series.js";
const seriesTBody = document.getElementById('series');
const promedio = document.getElementById('promedio');
renderseriesInTable(series);
function renderseriesInTable(series) {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<th>${c.id}</th>
                             <td>${c.nombre}</td>
                             <td>${c.canal}</td>
                             <td>${c.temporadas}</td>`;
        seriesTBody.appendChild(trElement);
    });
}
promedio.innerHTML = `El promedio de temporadas es: ${getPromedio(series)}`;
function getPromedio(series) {
    let sum = 0;
    series.forEach(c => {
        sum += c.temporadas;
    });
    return sum / series.length;
}
