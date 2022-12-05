
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
    foto : 'Manager  angela-lopez-social-media-manager.jpg',
   },

   {
    nome : 'Scott Estrada',
    ruolo : 'Developer' ,
    foto : 'scott-estrada-developer.jpg',
   },

   {
    nome : 'Barbara Ramos',
    ruolo : 'Graphic designer' ,
    foto : 'barbara-ramos-graphic-designer.jpg',
   },
]

const lista = document.querySelector('ul');

for( let key in team){
    const newElement = document.createElement('li');

    newElement.innerHTML += `${team.nome }  ${team.ruolo}  ${team.foto}`;

    lista.append(newElement);

    console.log(team[key]);
    
}

