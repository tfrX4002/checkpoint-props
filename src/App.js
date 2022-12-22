import React from 'react';
import './App.css';
import Profile from './profile/profile';



function App() {
  return (
    <React.Fragment>
          <Profile 
             fullName ="Fred Ryan" 
             bio="I love tech and sport , I'm ivorian , never abdicate is my resolution" 
             profession="student in Web development">
             
          </Profile>
    </React.Fragment>
  );
}

export default App;
