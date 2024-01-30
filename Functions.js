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

async function pet_card() {
    try {
        
        let html = '';
        
       for (let i=0; i < pets.length; i++){

            let age = block_number_icons[pets[i].age]
            let sex = '';
            if (pets[i].sex == "Male"){
                sex = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/></svg>`
            }
            else {
                sex = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/></svg>`
            }
            
            let htmlSegment = `
                <div class="col-lg-4 col-sm-12">
                    <div class="card" style="width: 18rem;">
                        <img src="${pets[i].image}" class="card-img-top" alt="Image of ${pets[i].name}">
                        <div class="card-body">
                            <h5 class="card-title">${pets[i].name}</h5>
                            <div>${sex}${age}</div>
                            <p class="card-text">${pets[i].name}, a ${pets[i].breed} ${pets[i].type}. ${pets[i].age} years old with ${pets[i].color} fur.</p>
                            <a href="detail.html?id=${i}" class="btn btn-primary">Details on ${pets[i].name}...</a>
                        </div>
                    </div>
                </div>`;
                html += htmlSegment;
        };

        document.getElementById("pet_container").innerHTML = html;
    } catch (error) {
        console.error("Error while processing pet data:", error);
    }
}

async function pet_details() {
    try {
        
        let html = '';
        
       for (let i=0; i < pets.length; i++){
        let htmlSegment = `
            <dt class="col-sm-3">Type:</dt>
            <dd class="col-sm-9">Dog</dd>
          
            <dt class="col-sm-3">Breed:</dt>
            <dd class="col-sm-9">Beagle</dd>
          
            <dt class="col-sm-3">Sex:</dt>
            <dd class="col-sm-9">Male</dd>
          
            <dt class="col-sm-3">Color:</dt>
            <dd class="col-sm-9">Tri-color (Black, Brown, White)</dd>
          
            <dt class="col-sm-3">Spayed / Neutered:</dt>
            <dd class="col-sm-9">Yes</dd>

            <dt class="col-sm-3">Age:</dt>
            <dd class="col-sm-9">5 Years</dd>

            <dt class="col-sm-3">Animal ID:</dt>
            <dd class="col-sm-9">34621</dd>

            <dt class="col-sm-3">Microchip Number:</dt>
            <dd class="col-sm-9">982000364789210</dd>

            <dt class="col-sm-3">Status:</dt>
            <dd class="col-sm-9">
              <ul><li>Health checked.</li></ul>
              <ul><li>Vaccinations up to date.</li></ul>
              <ul><li>Regularly dewormed.</li></ul>
              <ul><li>Microchipped.</li></ul>
            </dd>

            <dt class="col-sm-3">A Little Bit About Me:</dt>
            <dd class="col-sm-9">
            ${pets[i].about_me}
            </dd>`;
            html += htmlSegment;
       };
       document.getElementById("pet_box").innerHTML = html;
    } catch (error) {
        console.error("Error while processing pet data:", error);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    pet_card() });

document.addEventListener("DOMContentLoaded", function() {
    pet_details() });