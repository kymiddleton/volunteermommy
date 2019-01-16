import React from 'react';

import Header from './components/Header/Header';
import SelectGrade from './components/Child/SelectGrade/SelectGrade.js';


// import * as $ from 'axios';
import './App.css';



class App extends React.Component {


  render() {
    return <div>
      <Header />
      <h1>Grades</h1>
      <div style={{margin: '16px', position: 'relative'}}>
        <SelectGrade width={200} 
        name="grade_id"   
        items={[
          { value: 'PS3 M-F', id: 1},
          { value: 'PS3 M-TH', id: 2},
          { value: 'PS3 T, TH', id: 3},
          { value: 'PS3 T, TH, F', id: 4},
          { value: 'PS3 M, W, F', id: 5},
          { value: 'PS3 M, T, TH', id: 6},
          { value: 'PK4 M-F', id: 7},
          { value: 'PK4 M, W, F', id: 8},
          { value: 'PK4 M-TH', id: 9},
          { value: 'PK4 M-TH', id: 10},
          { value: 'PK4 M-TH', id: 11},
          { value: 'PK4 M-TH', id: 12},
          { value: 'Kindergarten', id: 13},
        ]}
        /> 
      </div>
      
    </div>
  }
}


export default App;
