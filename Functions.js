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

async function pet_card(pet) {
    try {
        let html = '';
        for (let i=offset; i < Math.min(offset+rpp, pets.length); i++){
            let age = block_number_icons[pets[i].age]
            let sex = '';
            if (pets[i].sex == "Male"){
                sex = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/></svg>`
            }
            else {
                sex = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-female" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5"/></svg>`
            }
            let htmlSegment = `
                <div class="col-lg-4 col-sm-12" data-index="${i}">
                    <div class="card" style="width: 18rem;">
                        <img src="${pets[i].image}" class="card-img-top" alt="Image of ${pets[i].name}">
                        <div class="card-body">
                            <h5 class="card-title">${pets[i].name}</h5>
                            <div>${sex}${age}</div><br />
                            <button class="btn btn-small btn-primary" id="btn-edit-pet">Edit Pet</button>
                            <button class="btn btn-sm btn-danger" data-index="$(i)">Delete</button>
                        </div>
                    </div>
                </div>`;
                html += htmlSegment;
        };
        document.getElementById("pet_container").innerHTML += html;
    } catch (error) {
        console.error("Error while processing pet data:", error);
    }
    if (offset+rpp > pets.length) more_pets.hidden = true;
}

function createButton(text, classList, clickHandler, appendTo) {
    let button = document.createElement('button');
    button.classList.add(...classList);
    button.innerText = text;
    button.addEventListener('click', clickHandler);
    appendTo.append(button);
}

function getQueryParam(key){
    let queryParams=new URLSearchParams(window.location.search);
    return queryParams.has(key) ? queryParams.get(key) : null;
}

function pet_details(id) {
        if (id !== null && id >= 0 && id < pets.length) {
            let html = 
            `<div class="row">
                <div class="col-lg-6 col-sm-12">
                    <img src="${pets[id].image}" class="card-img-top" alt="Image of a ${pets[id].breed} ${pets[id].type} on the grass">
                </div>
                <div class="col-lg-6 col-sm-12">
                    <dl class="row" id="pet_box">
                    </dl>
                
                    <dt class="col-sm-3">Type:</dt>
                    <dd class="col-sm-9">${pets[id].type}</dd>
                    
                    <dt class="col-sm-3">Breed:</dt>
                    <dd class="col-sm-9">${pets[id].breed}</dd>
                    
                    <dt class="col-sm-3">Sex:</dt>
                    <dd class="col-sm-9">${pets[id].sex}</dd>
                    
                    <dt class="col-sm-3">Color:</dt>
                    <dd class="col-sm-9">${pets[id].color}</dd>
                    
                    <dt class="col-sm-3">Spayed / Neutered:</dt>
                    <dd class="col-sm-9">${pets[id].fixed}</dd>

                    <dt class="col-sm-3">Age:</dt>
                    <dd class="col-sm-9">${pets[id].age}</dd>

                    <dt class="col-sm-3">Animal ID:</dt>
                    <dd class="col-sm-9">${pets[id].animal_id}</dd>

                    <dt class="col-sm-3">Microchip Number:</dt>
                    <dd class="col-sm-9">${pets[id].microchip_num}</dd>

                    <dt class="col-sm-3">Status:</dt>
                    <dd class="col-sm-9">${pets[id].status[0]}</dd>
                    <dd class="col-sm-9">${pets[id].status[1]}</dd>
                    <dd class="col-sm-9">${pets[id].status[2]}</dd>
                    <dd class="col-sm-9">${pets[id].status[3]}</dd>

                    <dt class="col-sm-3">A Little Bit About Me:</dt>
                    <dd class="col-sm-9">${pets[id].about_me}</dd>
                </div>
            </div>`;
            document.getElementById('pet_details_container').innerHTML = html;
        } else {
           window.location.href = 'index.html';
        }
}

function showModal(pet_index){
    document.getElementById("pet_name").innerHTML = pets[pet_index].name
    document.getElementById("description_pet").innerHTML = `${pets[pet_index].name}, a ${pets[pet_index].breed} ${pets[pet_index].type}. 
                                                            ${pets[pet_index].age} years old with ${pets[pet_index].color} fur.`;
    document.getElementById("pet_type").innerHTML = `<span class="label">Type</span>: ${pets[pet_index].type}`;                                                       
    document.getElementById("pet_sex").innerHTML = `<span class="label">Sex</span>: ${pets[pet_index].sex}`;
    document.getElementById("pet_breed").innerHTML = `<span class="label">Breed</span>: ${pets[pet_index].breed}`;
    document.getElementById("spayed_or_neutered_pet").innerHTML = `<span class="label">Spayed/Neutered</span>: ${pets[pet_index].fixed}`;
    document.getElementById("pet_age").innerHTML = `<span class="label">Age</span>: ${pets[pet_index].age}`;
    document.getElementById("status_pet").innerHTML = `<span class="label">Satus</span>: ${pets[pet_index].status},`;
    document.getElementById("go_to_details_page").href = `detail.html?id=${pet_index}`;
}

function updateCard(index) {
    let cardElement = document.querySelector(`[data-index="${index}"] .card`);
    if (cardElement) {
        let age = block_number_icons[pets[index].age];
        let sex = (pets[index].sex == "Male") ?
            `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/></svg>` :
            `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-female" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5"/></svg>`;

        let htmlContent = `
            <img src="${pets[index].image}" class="card-img-top" alt="Image of ${pets[index].name}">
            <div class="card-body">
                <h5 class="card-title">${pets[index].name}</h5>
                <div>${sex}${age}</div><br />
                <button class="btn btn-primary btn-edit-pet" data-index="${index}">Edit Pet</button>
            </div>`;

        cardElement.innerHTML = htmlContent;
    }
}