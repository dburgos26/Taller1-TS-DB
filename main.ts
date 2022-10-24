import { Serie } from "./serie.js";
import { series } from "./series.js";

const seriesTBody: HTMLElement = document.getElementById('series')!;
const promedio: HTMLElement = document.getElementById('promedio')!;

renderseriesInTable(series);
function renderseriesInTable(series: Serie[]): void {
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
function getPromedio(series: Serie[]): number {
    let sum = 0;
    series.forEach(c => {
        sum += c.temporadas;
    });
    return sum / series.length;
}
