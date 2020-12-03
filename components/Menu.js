// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
function menuMaker(menuIt){
  const menuDiv = document.createElement('div')
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  const li5 = document.createElement('li');
  const li6 = document.createElement('li');

  menuDiv.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
  ul.appendChild(li6);

  menuDiv.classList.add('menu');

  li1.textContent = menuIt[0];
  li2.textContent = menuIt[1];
  li3.textContent = menuIt[2];
  li4.textContent = menuIt[3];
  li5.textContent = menuIt[4];
  li6.textContent = menuIt[5];

  const menuButton = document.querySelector('.menu-button');

  menuButton.addEventListener('click', function(event){
    menuDiv.classList.add('menu--open');
  });

  return menuDiv
}

const theMenu = menuMaker(menuItems);

const header = document.querySelector('.header');

header.appendChild(theMenu);
