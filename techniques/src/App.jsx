// import React from 'react';


// function App(){
//   return(
//     <div>
//       <h1>Animals:</h1>
//       <ul>
//         <li>Lions</li>
//         <li>Cow</li>
//         <li>Snake</li>
//         <li>Lizard</li>
//       </ul>
//     </div>
//   )
// };
// export default App

// How to use react to write multiple of lists

// First method


// import React from 'react';

// const animals = ["Lion", "cow", "Snake", "Lizard"];

// function App(){
//   return(
//     <div>
//       <h1>Animals: </h1>
//       <ul>
//         {animals.map((animal) =>{
//           return <li key={animal}> {animal} </li>;
//         }
//         )}
//       </ul>
//     </div>
//   )
// };
// export default App;

// second method
// import React from 'react';
// function App(){
//   const animals = ["Lion", "Cow", "Snake", "Lizard",];
//   const animalList = animals.map((animal) => <li key= {animal}> {animal}</li>)
//   return (
//     <div>
//       <h1>Animals: </h1>
//       <ul>{animalList}</ul>
//     </div>
//   );
// }
// export default App;

// N.B that a key is used to let react know the identity of each element in the list



// next lesson
// Rendering a list of component in JSX
// props will be used here
// props are arguments that are passed into components

// import React  from "react";
// function ListItem(props) {
//   return <li>{props.animal}</li>

// }

// function List(props) {
//   return(
//     <ul>
//       {props.animals.map((animal) =>{
//         return <ListItem key={animal} animal={animal}/>

//       })}
//     </ul>
//   );
// }
// function App() {
//   const animals = ["Lion", "Cow", "Snake","Lizard"];

//   return(
//     <div>
//       <h1>Animals: </h1>
//       <List animals={animals}/>
//     </div>
//   );
// }
// export default App;

// using conditional rendering ui

// using the ternary operator 
// import React  from "react";

// function List(props) {
//   return(
//     <ul>
//       {props.animals.map((animal) =>{
//         return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;

//       })}
//     </ul>
//   );
// }

// or this

// function List(props) {
//   const filteredAnimals = props.animals.filter(animal => animal.startsWith("L"));

//   return (
//     <ul>
//       {filteredAnimals.map(animal => (
//         <li key={animal}>{animal}</li>
//       ))}
//     </ul>
//   );
// }


//  function App() {
//    const animals = ["Lion", "Cow", "Snake","Lizard"];

//    return(
//      <div>
//        <h1>Animals: </h1>
//        <List animals={animals}/>
//      </div>
//    );
//  }

// export default App;
// using the && operator 
// import React  from "react";

// function List(props) {
//   return(
//     <ul>
//       {props.animals.map((animal) =>{
//         return animal.startsWith("L") && <li key={animal}>{animal}</li> ;

//       })}
//     </ul>
//   );
// }


//  function App() {
//    const animals = ["Lion", "Cow", "Snake","Lizard"];

//    return(
//      <div>
//        <h1>Animals: </h1>
//        <List animals={animals}/>
//      </div>
//    );
//  }





// export default App;




// using if, if else and switch to conditionally render something

import React from 'react';

function List(props){
   if (!props.animals){
    return <div>Loading...</div>;
   }
   if (props.animals.length === 0) {
   return <div>There are no animals in the List!</div>;
}

  return(
    <ul>
      {props.animals.map((animal) =>{
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}
function App(){
  const animals = [];

  return(
    <div>
      <h1>Animals: </h1>
       <List animals={animals}/>   {/*second statement executing */}
      <List />  {/*First statement executing which nomally the case for fetching data in an Api*/}
    </div>
  );
}
export default App;




