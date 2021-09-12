window.onload = function() {


////////////////////////Light mode detection

/*if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    // dark mode 
} else {
    // light mode 
}
*/





document.querySelector('[data-switch-light]').addEventListener('click', function() {
    
    document.body.classList.toggle('light');
    let dots = document.querySelector('#dots');
    
    
    
    if(localStorage.getItem("mode" === "dark")) {
     //localStorage.setItem("mode", 'dark');
    
     principalStorage();
     
    
    
} else {
    if(localStorage.getItem("mode" !== "dark")) 
    //localStorage.setItem("mode", 'light');
    document.body.classList.toggle('dark');
    dots.src = "./assets/images/dots-light.svg";
          
    setLight();

   
}
    
  });







  

document.querySelector('#signIn').onclick = function () { 
    location.href = "./signin.html";

    

};


document.querySelector('#create_account').onclick = function () {
    location.href = "./signup.html";



};



}



function principalStorage() {
    
    localStorage.setItem('mode', 'dark');
       
   
}

function setLight() {
      localStorage.setItem('mode', 'light');
     
    
}



///////////////////////

function rotateImage() {
    var img = document.querySelector('#arm');
    img.style.transform = 'rotate(18deg)';
}
