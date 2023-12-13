// Sidebar Skript Start

function openNav() {
    document.getElementById("mySidebar").style.width = "100%";

}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

// Sidebar Skript end


//Expandable Skript Start
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var expandobj = this.nextElementSibling;
        if (expandobj.style.display === "block") {
            expandobj.style.display = "none";
        } else {
            expandobj.style.display = "block";
        }
    });
}
//Expandable Skript End


// Filters Skript Start
var checkboxes = document.querySelectorAll(".categories input");
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", filter);
}

filter();

function filter() {
    var i, j;

    // Get the selected categories
    var checkboxes = document.querySelectorAll(".categories input");
    var selectedRows = getSelectedRows(checkboxes);


    // Apply the filter
    var items = document.querySelectorAll(".filterDiv");
    var item, show;
    for (i = 0; i < items.length; i++) {
        item = items[i];
        show = shouldShowItem(item, selectedRows);

        if (show) {
            item.classList.add("show");
        } else {
            item.classList.remove("show");
        }
    }
}

function getSelectedRows(checkboxes) {
    var selectedRows = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedRows.push(checkboxes[i].value);

        }
    }
    return selectedRows;
}

function shouldShowItem(item, selectedRows) {
    if (selectedRows.length === 0) {
        return true;
    }

    // Check if it matches any selected rows
    for (var i = 0; i < selectedRows.length; i++) {
        if (item.classList.contains(selectedRows[i])) {
            // Further filter based on the second row of filters
            if (checkSecondRowFilters(item)) {
                return true;
            }
        }
    }

    return false;
}

function checkSecondRowFilters(item) {
    var checkboxes = document.querySelectorAll(".categories input");
    var selectedRows = getSelectedRows(checkboxes);
    return selectedRows.every(row => item.classList.contains(row));
}

// Filters Skript End


// Back function start
function back() {
    onclick(history.back());
}

// Back function end