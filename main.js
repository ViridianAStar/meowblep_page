function navigateToPage(selectElement) {
    var selectedPage = selectElement.value;

    if (selectedPage) {
        window.location.href = selectedPage + ".html";
    }
}
