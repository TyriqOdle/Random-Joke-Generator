const buildUp = document.querySelector(".build-up")
const punchLine = document.querySelector(".punchline")
const newJoke_btn = document.querySelector("#New-Joke")
const ShowPinchline_btn = document.querySelector("#Show-Pinchline")
let joke;
let punchline_toggle = false;

getJoke()
newJoke_btn.addEventListener("click", function(){
    punchline_toggle = false
    getJoke(punchline_toggle)

});



ShowPinchline_btn.addEventListener("click", function(){
    punchline_toggle = true
    getJoke(punchline_toggle)
})






async function getJoke(PL_toggle){

    if(!PL_toggle){
        try{
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    
            
            if(!response.ok){
                throw new Error("Could not get joke")
            }
    
            joke = await response.json();
            punchLine.textContent =" "
                diplaySetup()
            
    
            console.log(joke)
    
        
        }
        catch(error){
            console.error(error)
        }
    }else{
        punchLine.textContent = joke.punchline
    }

    

}



function diplaySetup(){
    buildUp.textContent = joke.setup;

}
