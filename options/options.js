function loadOptions() {
    browser.storage.local.get(function (options) {
        document.getElementById("significantMoveThreshold").value = options.significantMoveThreshold || 5;
        document.getElementById("showLogMessages").checked = !!options.showLogMessages;
    });
}

function saveOptions() {
    browser.storage.local.set({
        significantMoveThreshold: document.getElementById("significantMoveThreshold").value,
        showLogMessages: document.getElementById("showLogMessages").checked
    });

    alert("Saved!");
}

document.addEventListener("DOMContentLoaded", function () {
    loadOptions();
    document.getElementById('save').onclick = saveOptions;
});
