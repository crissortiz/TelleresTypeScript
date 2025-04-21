import { series } from './Data';

const seriesTable: HTMLElement = document.getElementById('seriesTable')!;

showSeries(series);

function showSeries(series: any[]): void {
    const seriesList: HTMLElement = document.createElement('tbody');
    let totalSeasons = 0;

    series.forEach(serie => {
        const serieRow: HTMLElement = document.createElement('tr');
        serieRow.innerHTML = `
            <td class="series-id">${serie.getId()}</td>
            <td class="series-name">
                <a href="#" class="serie-link">${serie.getName()}</a>
            </td>
            <td>${serie.getChannel()}</td>
            <td>${serie.getSeasons()}</td>
        `;

        const linkElement = serieRow.querySelector('.serie-link') as HTMLAnchorElement;
        linkElement.addEventListener('click', (event) => {
            event.preventDefault();
            showInfoSerie(serie);
        });

        totalSeasons += serie.getSeasons();
        seriesList.appendChild(serieRow);
    });

    seriesTable.appendChild(seriesList); 

    const averageSeasons = Math.round(totalSeasons / series.length);
    const averageText: HTMLElement = document.createElement('p');
    averageText.className = 'mt-3 avg-text';
    averageText.textContent = `Average number of seasons: ${averageSeasons}`;
    seriesTable.parentElement!.appendChild(averageText);
}

function showInfoSerie(serie: any): void {
    const cardContainer: HTMLElement = document.getElementById('cardContainer')!;
    const serieImage: HTMLImageElement = document.getElementById('serieImage') as HTMLImageElement;
    const serieTitle: HTMLElement = document.getElementById('serieTitle')!;
    const serieDescription: HTMLElement = document.getElementById('serieDescription')!;
    const serieLink: HTMLAnchorElement = document.getElementById('serieLink') as HTMLAnchorElement;

    serieImage.src = serie.getImage();
    serieImage.alt = `Image of ${serie.getName()}`;
    serieTitle.textContent = serie.getName();
    serieDescription.textContent = serie.getDescription();
    serieLink.href = serie.getLink();

    cardContainer.style.display = 'block';
}
