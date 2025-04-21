import { series } from './Data.js';

var seriesTable = document.getElementById('seriesTable');

showSeries(series);

function showSeries(series) {
    var seriesList = document.createElement('tbody');
    var totalSeasons = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var serieRow = document.createElement('tr');
        serieRow.innerHTML = "\n            <td class=\"series-id\">".concat(serie.getId(), "</td>\n            <td class=\"series-name\">").concat(serie.getName(), "</td>\n            <td>").concat(serie.getChannel(), "</td>\n            <td>").concat(serie.getSeasons(), "</td>\n        ");
        totalSeasons += serie.getSeasons();
        seriesList.appendChild(serieRow);
    }
    seriesTable.appendChild(seriesList);
    var averageSeasons = Math.round(totalSeasons / series.length);
    var averageText = document.createElement('p');
    averageText.className = 'mt-3 ';
    averageText.textContent = "Seasons average: ".concat(averageSeasons);
    seriesTable.parentElement.appendChild(averageText);
}