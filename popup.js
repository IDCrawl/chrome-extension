const BASE_URL = "https://www.idcrawl.com/";

function getIDCrawlURL(search) {
    search = search.trim()
        .toLowerCase()
        .replace("   ", " ")
        .replace("  ", " ")
        .replace(" ", "-");
    return BASE_URL + encodeURIComponent(search);
}

function onSubmitForm(){
    var search = document.getElementById("search").value;
    var url = getIDCrawlURL(search);
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
   document.getElementById('search-form').addEventListener('submit', onSubmitForm);
});