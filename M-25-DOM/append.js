// console.log("append.js");
const varsity = document.getElementById('varsity');
console.log(varsity);
// const li3 = "total credit: 137";
const li = document.createElement('li');
li.innerText = "total credit: 137";
varsity.appendChild(li);

const main = document.getElementById('main-content');
const section = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'My fav food';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'biryani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'tehari';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'morog polao';
ul.appendChild(li3);

section.appendChild(ul);

main.appendChild(section);

// adding new section by innerHTML

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1>My Dresses</h1>
    <ul>
        <li>T-shirt</li>
        <li>T-genji</li>
        <li>T-pant</li>
        <li>Lungi</li>
    </ul>
`
main.appendChild(sectionDress);