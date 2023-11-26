function navigateToPage(selectElement) {
    var selectedPage = selectElement.value;

    if (selectedPage) {
        window.location.href = selectedPage + ".html";
    }
}

function checkText() {
    document.getElementById("myTextbox").addEventListener("input", function() {
        var textboxValue = this.value;
        var messageElement = document.getElementById("code");

        if (textboxValue == "MIIBOQIBAAJBAKoLOyblv0INCXZn9b+7+YJGtgp0sEeWS/mciyE0NGHiMikDxd/zTsZyF4hHkAYKbEhp756JKoGmU63429bvgqECAwEAAQJAGZ/fphjxHW8Bggpgiig1jWBChojXF7KaeF8SyEopqqZAhwVMIc5c66qih/higauDSibx6yTwyg0+mMdQ+ioRwQIhAN/XzJbLe1H5JBqe/VwJIjNZXgSLFUUg57req8WlN7VtAiEAwnjhQBuO71+4aosRUbFElNweKkUl0oiB0f3o/AbrpYUCIAXPTxMW4vOEuOgr+j16SzXz+tm5Vmr96KXUA7dUi3adAiBjcsFtsSoVC1QZV+iRaB90KGRcpWPEF/6bTkcYqslSqQIgXcpOTfZQ8ZXEdX64kcEasDgOKXU+MbGDeVh4BqTQATQ") {
            navigateToPage("pages/hehe/whoami.html");
        } else {
            console.log("Try again later!")
        }
    });
}
