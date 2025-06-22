searchButton.addEventListener('click', () => { 
  let searchinput = document.getElementById('search-bar').value.toLowerCase();

  if(searchinput) {
    const filtered = menufilter.filter(menu => menu.name.toLowerCase().includes(input));
    renderMenu(filtered);        
  }
  else {
    renderMenu(menufilter);
  }
});


const searchButton = document.getElementById('search-button');