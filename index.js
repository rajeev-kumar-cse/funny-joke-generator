// api-ninja api is used in this project
// 
const btnEl = document.getElementById('btn');
const jokeParagraph = document.getElementById("joke");
const container = document.querySelector(".container");

const apiKey = "a69WsO3DyxPRpXJHS+1D2w==Vpq8LunOet6PvzTX";
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
    method : "GET",
    headers: { 
        'X-Api-Key': apiKey,
    }
}


async function getjokeData(){
    try{
        jokeParagraph.innerHTML = "Loading please wait.....";
        btnEl.disabled = true;
        jokeParagraph.classList.add("spiner");
        btnEl.style.background="rgba(15, 214, 228, 0.3)";
        
        const response = await fetch(apiUrl, options);
        // converting response to json data
        const data = await response.json();
    
        jokeParagraph.classList.remove("spiner");
        jokeParagraph.innerHTML = data[0].joke;
        btnEl.disabled = false;
        btnEl.style.background="rgba(15, 214, 228, 0.8)";
    }catch (error){
        jokeParagraph.innerHTML = "An Error happened, try again later";
        jokeParagraph.classList.remove("spiner");
        btnEl.disabled = false;
        btnEl.style.background="rgba(15, 214, 228, 0.8)";
    }
    
}

btnEl.addEventListener('click',getjokeData);