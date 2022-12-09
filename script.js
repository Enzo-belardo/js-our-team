
const team =[
   {
    nome : 'Wayne Barnett',
    ruolo : 'Founder & CEO' ,
    foto : 'wayne-barnett-founder-ceo.jpg',
   },

   {
    nome : 'Angela caroll',
    ruolo : 'Chief Editor' ,
    foto : 'angela-caroll-chief-editor.jpg',
   },

   {
    nome : 'Walter Gordon',
    ruolo : 'Office Menager' ,
    foto : 'walter-gordon-office-manager.jpg',
   },

   {
    nome : 'Angela lopez',
    ruolo : 'Social media' ,
    foto : 'angela-lopez-social-media-manager.jpg',
   },

   {
    nome : 'Scott Estrada',
    ruolo : 'Developer' ,
    foto : 'scott-estrada-developer.jpg',
   },

   {
    nome : 'Barbara Ramos',
    ruolo : 'Graphic designer',
    foto : 'barbara-ramos-graphic-designer.jpg',
   },
]

const lista = document.querySelector('div.team');

for( let i = 0 ; i < team.length; i++){
    const newElement= document.createElement('div');

    newElement.innerHTML = `<p>${team[i].nome}</p>   <p>${team[i].ruolo}</p>   <img src="${team[i].foto}" alt=""> `;
    newElement.classList.add ('member')
    lista.append(newElement);
    
}

