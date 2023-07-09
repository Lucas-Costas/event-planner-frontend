function filterByName(){
    var searchedName = document.getElementById("name-searched").value;
    var listItems = document.getElementsByTagName("li");
    for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        if(searchedName.toLowerCase() != listItem.id){
            listItem.style.display = "none";
        } else {
            listItem.style.display = "";
        }
    }
    var searchButton = document.getElementById("search-button");
    searchButton.disabled = true;
}

function clean(){
    var listItems = document.getElementsByTagName("li");
    for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        listItem.style.display = "";
    }
    var searchButton = document.getElementById("search-button");
    searchButton.disabled = false;
    var searchedNameTextField = document.getElementById("name-searched");
    searchedNameTextField.value = "";
}