const moviesContainer = document.getElementById('movies-container');
const seriesContainer = document.getElementById('series-container');
const appsContainer = document.getElementById('apps-container');


function initDirectory() {
    movieDatabase.forEach(site => {
        let addhtml = site.html;
        let featuresList = '<ul>';
        site.siteFeatures.forEach(feature => { featuresList += `<li>${feature}</li>`; });
        if (addhtml != "") {
            featuresList += `<li>${addhtml}</li>`;
        }
        featuresList += '</ul>';

        let tagsList = '<div class="tags-container">';
        site.tags.forEach(tag => { tagsList += `<span class="tag">#${tag}</span>`; });
        tagsList += '</div>';

        const cardHtml = `
                    <div class="card">
                        <div>
                            <div class="siteDetails" id="hello">
                                <h3>${site.siteName}</h3>
                            </div>
                            ${featuresList}
                        </div>
                        <div>
                            ${tagsList}
                            <a href="${site.url}" target="_blank" class="btn">Visite Now</a>
                        </div>
                    </div>
                `;


        if (site.category === 'Movie & Series') moviesContainer.innerHTML += cardHtml;
        else if (site.category === 'Other') seriesContainer.innerHTML += cardHtml;
        else if (site.category === 'Apps') appsContainer.innerHTML += cardHtml;
    });



    document.getElementById('movies-section').classList.add('active');
    document.getElementById('menu-movies').classList.add('active');
}

function switchTab(event, targetCategory) {
    event.preventDefault();
    document.getElementById('movies-section').classList.remove('active');
    document.getElementById('series-section').classList.remove('active');
    document.getElementById('apps-section').classList.remove('active');

    document.getElementById('menu-movies').classList.remove('active');
    document.getElementById('menu-series').classList.remove('active');
    document.getElementById('menu-apps').classList.remove('active');


    document.getElementById(`${targetCategory}-section`).classList.add('active');
    document.getElementById(`menu-${targetCategory}`).classList.add('active');
}

window.onload = initDirectory;

