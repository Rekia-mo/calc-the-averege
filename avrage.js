const modules = [{
  name: 'ARCHI',
  cof: 3
},
{
  name: 'ALGO',
  cof: 3
},
{
  name: 'LOGIC',
  cof: 3,
},
{
  name: 'MI',
  cof: 3,
},
{
  name: 'PROBA',
  cof: 3,
},
{
  name: 'SI',
  cof: 3,

},
{
  name: 'ENG',
  cof: 2,
}];

let HTML1 = '';
modules.forEach((module)=>{
  
  if(module.name === 'ALGO'){
    HTML1+=`
    <div class="module" data-module-name="${module.name}">
      <legend class="module-name">${module.name}:</legend>
      
      <label class="titre" for="td">TD:</label>
      <input type="text"  name="td" placeholder="Type your TD's marke" class="td td-${module.name} input" >
      <br>
      <label class="titre" for="tp">TP:</label>
      <input type="text"  name="tp-${module.name}"placeholder="Type your TP's marke" class="tp tp-${module.name} input">
      <br>
      <label class="titre" for="exam">exam:</label>
      <input type="text"  name="exam" placeholder="Type your EXAM's marke" class="exam exam-${module.name} input">
    </div>
    `
  }else if(module.name === 'ENG'){
    HTML1+=`
    <div class="module" data-module-name="${module.name}">
      <legend class="module-name">${module.name}:</legend>
      <br>
      <label class="titre" for="exam">exam:</label>
      <input  type="text"  name="exam-${module.name}" placeholder="Type your EXAM's marke" class="exam exam-${module.name} input">
    </div>
  `
  }else{
    HTML1+=`
      <div class="module" data-module-name="${module.name}">
        <legend class="module-name">${module.name}:</legend>
        
        <label class="titre" for="td">TD:</label>
        <input  type="text"  name="td-${module.name}" placeholder="Type your TD's marke" class="td td-${module.name} input" >
        <br>
        <label class="titre" for="exam">exam:</label>
        <input type="text"  name="exam-${module.name}" placeholder="Type your EXAM's marke" class="exam exam-${module.name} input">
      </div>
    `
  }
}); 
document.querySelector('.js-moduls').innerHTML = HTML1;


function calc(){
  let doc1 = document.querySelector('.js-moys');
  doc1.innerHTML = '';

  let total = 0;

  document.querySelectorAll('.module').forEach((module)=>{
    let moy = 0;

    const moduleName = module.dataset.moduleName;

    const cof = findCof(moduleName);

    if(moduleName === 'ENG'){
      //Bring the exam's val
      const noteExam = document.querySelector(`.exam-${moduleName}`).value;

      moy = (Number(noteExam)).toFixed(2);

    }else if(moduleName === 'ALGO'){
      const noteTd = document.querySelector(`.td-${moduleName}`).value;

      //Bring the exam's val
      const noteExam = document.querySelector(`.exam-${moduleName}`).value;

      //Bring the tp's val
      const noteTp = document.querySelector(`.tp-${moduleName}`).value;

       moy = (0.3 * noteTd + 0.2 * noteTp + 0.5 * noteExam).toFixed(2);
      
    }else{
      //Bring the td's val
      const noteTd = document.querySelector(`.td-${moduleName}`).value;

      //Bring the exam's val
      const noteExam = document.querySelector(`.exam-${moduleName}`).value;

      //calc the moy
       moy = (0.4 * noteTd + 0.6 * noteExam).toFixed(2);
     
    };

    doc1.innerHTML += `<section class="section"><div class="moduleName"> ${moduleName} </div> <div class="moduleMoy">${moy}</div></section>`;
     
    total += moy * cof;
  });

  total = (total / 20).toFixed(2);

    document.querySelector('.js-total').innerHTML = `<div class="total">Total avrege: <nav class="moy" >${total}</nav></div>`;
};
// nzid nejbad e tp + nhawess 3la cof (function)+ calcul + not final 
//dez
document.querySelector('.js-sub-buton').addEventListener('click',calc);

// find the cof
function findCof(moduleName){
  let X;
  modules.forEach((module)=>{
   
    if (module.name === moduleName){ 
      X = module.cof;
    }
  });
  return X;
}



