// first we will define greetings Array

    const greetings = [
      { word: "Hello",       language: "English",    code: "en" },
      { word: "Hola",        language: "Spanish",    code: "es" },
      { word: "Bonjour",     language: "French",     code: "fr" },
      { word: "Hallo",       language: "German",     code: "de" },
      { word: "Ciao",        language: "Italian",    code: "it" },
      { word: "Olá",         language: "Portuguese", code: "pt" },
      { word: "Merhaba",     language: "Turkish",    code: "tr" },
      { word: "नमस्ते",        language: "Hindi",      code: "hi" },
      { word: "السلام علیکم", language: "Urdu",       code: "ur" },
      { word: "こんにちは",     language: "Japanese",   code: "ja" },
      { word: "안녕하세요",     language: "Korean",     code: "ko" }
    ];


    // Now let's select element

    const greetingE1 = document.getElementById('greeting');
    const targetE1 = document.getElementById('target');
    const captionEl  = document.getElementById("caption");
    const nameInput  = document.getElementById("nameInput");
    const langBtn    = document.getElementById("langBtn");

    // let define variable that rember which greeting is currently shown

    let currentIndex = 0
    
    // Now we will write function that can show greetings


    function showGreeting(index){
        const item =greetings[index]

        // Now add css class that fades the text out 
        greetingE1.classList.add('is-changing');

        setTimeout(function(){
            greetingE1.textContent=item.word;
            greetingE1.setAttribute("lang",item.code);
            captionEl.textContent =item.language + " · tap the button to hear it in another language.";

            // remove calss so text fade back 

            greetingE1.classList.remove('is-changing');
        },250);
    }

    // let's work on event 

    langBtn.addEventListener("click",function(){
        currentIndex=(currentIndex+1)% greetings.length;
        showGreeting(currentIndex);
    });


    // event on input 

    nameInput.addEventListener("input",function(){
        const name = nameInput.value.trim();

        // if box empty then world will remian same 
        targetE1.textContent=name === ""? "World" : name + "!";
    });

