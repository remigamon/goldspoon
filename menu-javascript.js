const selectmenu = document.getElementById('menu');
const container = document.getElementById('container');
var menufilter = []; //empty array to keep data in load later
const category = ["all", "breakfast", "burger", "western", "salad", "pasta", "noodle", "coffee", "dessert"];

window.onload = (() => {
    //GET
    const Req = new XMLHttpRequest();
    Req.open('GET', 'menu-json.json', true);
    Req.onload = () => {
        const data = JSON.parse(Req.responseText);
        menufilter = data;
        renderMenu(data);


//=========================================================================================//
// to filter
        category.forEach(category => {
            const idChose = document.getElementById(category);

            if(idChose){
                idChose.addEventListener('click', (event) => {
                  event.preventDefault();
                  if(category === "all"){
                    const filtered = menufilter;
                    renderMenu(menufilter);
                  }
                  else{
                    const filtered = menufilter.filter(menu => menu.type === category);
                    renderMenu(filtered);

                  }
                });
            }
        });

//=========================================================================================//
// to search --insert here--
        const searchInput = document.getElementById('search-bar');
        const searchButton = document.getElementById('search-button');

        searchButton.addEventListener('click', (event) => {
          event.preventDefault();
          const search = searchInput.value.trim().toLowerCase();

          if (!search) {
            renderMenu(menufilter);
          }
          else {
            const filtered = menufilter.filter(menu => menu.name.toLowerCase().includes(search));
            renderMenu(filtered);
          }
        })

    };
    Req.send();
    
})


//=========================================================================================//
//Function to display
function renderMenu(data) {
    
    var container = document.getElementById('container');
    container.innerHTML = '';

    data.forEach(data => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
                        <h4 style="white-space: nowrap;">${data.name}</h4>
                        <img src="${data.image}" alt="${data.name}">
                        <h4 style="text-align: left;"><span style="font-size: 10px;">RM</span> ${data.price}</h4>
                        <h4>"${data.description}."</h4> 
                        `
        container.appendChild(card);        
    })

}
//=========================================================================================================//
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}