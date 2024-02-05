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
//onst file_content = load_file(file_url);

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
                sex = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-female" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5"/></svg>`
            }
            // <button class="btn btn-primary" onclick="showModal(${i})">More information</button>
            //<a href="detail.html?id=${i}" class="btn btn-primary">Details on ${pets[i].name}...</a>
            let htmlSegment = `
                <div class="col-lg-4 col-sm-12" data-index="${i}">
                    <div class="card" style="width: 18rem;">
                        <img src="${pets[i].image}" class="card-img-top" alt="Image of ${pets[i].name}">
                        <div class="card-body">
                            <h5 class="card-title">${pets[i].name}</h5>
                            <div>${sex}${age}</div><br />                                
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
    let info = 
    `
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">${pets[pet_index].name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <ul>
                    <li><p class="card-text">${pets[pet_index].name}, a ${pets[pet_index].breed} ${pets[pet_index].type}. ${pets[pet_index].age} years old with 
                    ${pets[pet_index].color} fur.</p></li>
                    <li><p>Sex: ${pets[pet_index].sex}</p></li>
                    <li><p>Spayed/Neutered: ${pets[pet_index].fixed}</p></li>
                    <li><p>Status: ${pets[pet_index].status}, </p></li>
        
                </ul>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary">
                    <a href="detail.html?id=${pet_index}" style="color: white; text-decoration: none;">
                        More information
                    </a>
                </button>
                <button id="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    `;
    document.getElementById('modal').innerHTML = info;
}

