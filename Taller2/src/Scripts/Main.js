import { series } from './Data.js';

const seriesTable = document.getElementById('seriesTable');
showSeries(series);

function showSeries(series) {
    const seriesList = document.createElement('tbody');
    let totalSeasons = 0;

    series.forEach(serie => {
        const serieRow = document.createElement('tr');
        serieRow.innerHTML = `
            <td class="series-id">${serie.getId()}</td>
            <td class="series-name">
                <a href="#" class="serie-link">${serie.getName()}</a>
            </td>
            <td>${serie.getChannel()}</td>
            <td>${serie.getSeasons()}</td>
        `;

        const linkElement = serieRow.querySelector('.serie-link');
        linkElement.addEventListener('click', function (event) {
            event.preventDefault();
            showInfoSerie(serie);
        });

        totalSeasons += serie.getSeasons();
        seriesList.appendChild(serieRow);
    });

    seriesTable.appendChild(seriesList);

    const averageSeasons = Math.round(totalSeasons / series.length);
    const averageText = document.createElement('p');
    averageText.className = 'mt-3 avg-text';
    averageText.textContent = `Average number of seasons: ${averageSeasons}`;
    seriesTable.parentElement.appendChild(averageText);
}

function showInfoSerie(serie) {
    const cardContainer = document.getElementById('cardContainer');
    const serieImage = document.getElementById('serieImage');
    const serieTitle = document.getElementById('serieTitle');
    const serieDescription = document.getElementById('serieDescription');
    const serieLink = document.getElementById('serieLink');

    serieImage.src = serie.getImage(); 
    serieImage.alt = `Image of ${serie.getName()}`;
    serieTitle.textContent = serie.getName();
    serieDescription.textContent = serie.getDescription();
    serieLink.href = serie.getLink();
    serieLink.target = '_blank';

    cardContainer.style.display = 'block';
}
