const moviesContainer = document.getElementById('movies-container');
const Other = document.getElementById('series-container');
const appsContainer = document.getElementById('apps-container');


function initDirectory() {
    movieDatabase.forEach(site => {
        let featuresList = '<h3>Categories</h3><ul>';
        site.siteFeatures.forEach(feature => { featuresList += `<li>${feature}</li>`; });

        featuresList += '</ul>';

        // let addmore = `<ul>${site.more}`;
        let moreList = '<ul>';
        site.more?.forEach(item => {
            moreList += `<li>${item}</li>`;
        });
        moreList += '</ul>';

        let tagsList = '<div class="tags-container">';
        site.tags.forEach(tag => { tagsList += `<span class="tag">#${tag}</span>`; });
        tagsList += '</div>';

        const cardHtml = `
<div class="card-main">
  <div class="siteDetails" title="Click">
    <h1>${site.siteName}</h1>
    <div>
      <svg fill="#ff1414" height="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.787 511.787" xml:space="preserve" class="svg1"
        stroke="#ff1414" stroke-width="23.028075">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <path
                d="M508.667,125.707c-4.16-4.16-10.88-4.16-15.04,0L255.76,363.573L18,125.707c-4.267-4.053-10.987-3.947-15.04,0.213 c-3.947,4.16-3.947,10.667,0,14.827L248.293,386.08c4.16,4.16,10.88,4.16,15.04,0l245.333-245.333 C512.827,136.693,512.827,129.867,508.667,125.707z">
              </path>
            </g>
          </g>
        </g>
      </svg>

      <svg fill="#ff1414" height="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.735 511.735" xml:space="preserve" class="svg2"
        stroke="#ff1414" stroke-width="23.028075">
        <g id="SVGRepo_bgCarrier"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <path
                d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z">
              </path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
  <div class="card" id="card">
    <div id="feature">
      <div class="cat-list">
        ${featuresList}
      </div>
      <div class="many-more">
        <div id="more">
          ${moreList}
        </div>
        <div id="tags">
          <details>
            <summary>Tags</summary>
            ${tagsList}
          </details>
        </div>
      </div>
    </div>
    <div id='addhtml'>
      ${site.html}
    </div>
    <a href="${site.url}" target="_blank" class="btn">Visit Now</a>
  </div>
</div>
        `;

        if (site.category === 'Movie & Series') moviesContainer.innerHTML += cardHtml;
        else if (site.category === 'Other') Other.innerHTML += cardHtml;
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


let con = `<h3>Need Help?</h3>
<div class="social">
<a href="https://t.me/a2zfilmyy" target="_blank" class="contact-icon" style="cursor:pointer;">
<span>Telegram</span><svg width="30px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z" fill="#40B3E0"> </path> <path d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308" fill="#FFFFFF"> </path> <path d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475" fill="#D2E5F1"> </path> <path d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624" fill="#B5CFE4"> </path> </g> </g></svg>
</a>
</div>`

let ms = document.getElementById('mcontact');
ms.innerHTML = con;
let os = document.getElementById('ocontact');
os.innerHTML = con;
let as = document.getElementById('acontact');
as.innerHTML = con;



[moviesContainer, Other, appsContainer].forEach(container => {
    container.addEventListener("click", (e) => {
        const header = e.target.closest(".siteDetails");
        if (!header) return;

        const cardMain = header.closest(".card-main");
        cardMain.classList.toggle("open");
    });
});