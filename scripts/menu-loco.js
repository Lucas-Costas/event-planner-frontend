function filterByName() {
    var searchedName = document.getElementById("name-searched").value;
    var listItems = document.getElementsByTagName("li");
    displayOnlySearchedItem(listItems, searchedName);
    disableFilterButton();
}

function displayOnlySearchedItem(listItems, searchedName){
    for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        if (listItem.id !== searchedName.toLowerCase()) {
            listItem.style.display = "none";
        } else {
            listItem.style.display = "";
        }
    }
}

function disableFilterButton(){
    var filterButton = document.getElementById("filter-by-name");
    filterButton.disabled = true;
}

function cleanFilters() {
    cleanSearchedInputText();
    resetListItems();
    enableFilterButton();
}

function cleanSearchedInputText(){
    var searchedNameTextInput = document.getElementById("name-searched");
    searchedNameTextInput.value = "";
}

function resetListItems(){
    var listItems = document.getElementsByTagName("li");
    for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        listItem.style.display = ""
    }
}

function enableFilterButton(){
    var filterButton = document.getElementById("filter-by-name");
    filterButton.disabled = false;
}