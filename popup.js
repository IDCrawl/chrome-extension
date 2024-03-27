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
    if (search == "") {
        window.open(BASE_URL, '_blank');
    } else {
        var url = getIDCrawlURL(search);
        var state = document.getElementById("state").value;
        if (state != "") {
            url = url + "/" + state;
        }
        window.open(url, '_blank'); 
    }
}

document.addEventListener('DOMContentLoaded', function () {
   document.getElementById('search-form').addEventListener('submit', onSubmitForm);
});