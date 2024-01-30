async function load_file(url) {
    try {
        const response = await fetch(url);
        const data = await response.text();
        return data;
    }   catch (error) {
        console.error("Error while loading the file:", error);
    }
}

const file_url = "data.js";
const file_content = load_file(file_url);

async function pet_card(pets) {
    for(let i=0;i<pets.length;i++){
        console.log(pets[i].text+" - "+pets[i].name);
    }
    /*try {
        const results = JSON.parse(await load_file(file_url));
        console.log(results);

async function pet_card() {
    try {
        
        let html = '';

        pets.forEach(pet => {
            let htmlSegment = `
                <div class="col-lg-4 col-sm-12">
                    <div class="card" style="width: 18rem;">
                        <img src="${pet.image}" class="card-img-top" alt="Image of ${pet.name}">
                        <div class="card-body">
                            <h5 class="card-title">${pet.name}</h5>
                            <a href="detail.html" class="btn btn-primary">Details on ${pet.name}...</a>
                        </div>
                    </div>
                </div>`;
                html += htmlSegment;
        });

        document.getElementById("pet_container").innerHTML = html;
    } catch (error) {
        console.error("Error while processing pet data:", error);
    }*/
}

document.addEventListener("DOMContentLoaded", function() {
    pet_card() });