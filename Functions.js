<script src="data.js"></script>

const pet_data = "data.js";

function pet_cards(){
    let contentDiv=document.getElementsByClassName("col-lg-4 col-sm-12");
    for(let i = 0; i<3; i++) {
        contentDiv.innerHTML+=`
        <div>
            <h2>${pets[i].author}</h2>
            <p>${pets[i].text}</p>
        </div>`;
    }
}