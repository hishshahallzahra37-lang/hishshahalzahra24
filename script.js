const dataJakarta = {
    "Tebet": "Golongan darah terbanyak: O+",
    "Menteng": "Golongan darah terbanyak: A+",
    "Cilandak": "Golongan darah terbanyak: B+",
    "Kebayoran Baru": "Golongan darah terbanyak: O-",
    "Grogol Petamburan": "Golongan darah terbanyak: AB+",
    "Jatinegara": "Golongan darah terbanyak: A-",
    "Tanah Abang": "Golongan darah terbanyak: B-",
    "Pasar Rebo": "Golongan darah terbanyak: O+",
    "Makassar": "Golongan darah terbanyak: AB-",
    "Johar Baru": "Golongan darah terbanyak: A+"
};

const searchInput = document.getElementById("search");
const resultBox = document.getElementById("result");

searchInput.addEventListener("keyup", function () {
    let keyword = searchInput.value.trim();
    if (keyword.length === 0) {
        resultBox.style.display = "none";
        return;
    }

    let area = Object.keys(dataJakarta).find(
        key => key.toLowerCase().includes(keyword.toLowerCase())
    );

    if (area) {
        resultBox.style.display = "block";
        resultBox.innerHTML = `
            <div class="area">${area}</div>
            <div class="blood">${dataJakarta[area]}</div>
        `;
    } else {
        resultBox.style.display = "block";
        resultBox.innerHTML = "<i>Data tidak ditemukan...</i>";
    }
});
