const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border= "2px solid blue";
    section.style.borderRadius = "5px";
    section.style.marginBottom = "10px";
    section.style.padding = "50px";
    section.style.backgroundColor = "lightgreen";
}
const uiu = document.getElementById('uiu-container');
uiu.classList.add('yellow-bg');
uiu.classList.add('text-center');
uiu.classList.remove('large-text');
uiu.classList.remove('text-center');