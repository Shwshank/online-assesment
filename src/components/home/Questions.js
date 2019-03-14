import React from 'react';
// import { Router, BrowserRouter } from 'react-router-dom';

class Questions extends React.Component {

  render() {
    return(
      <div>
       <h4>Questions</h4>
       <table className="table">
         <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">Question</th>
             <th scope="col">Options</th>
             <th scope="col">Answer/s</th>
             <th scope="col">Section</th>
             <th scope="col">Marks</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <th scope="row">1</th>
             <td>Mark</td>
             <td>Otto</td>
             <td>@mdo</td>
             <td>Mark</td>
             <td>Otto</td>
           </tr>
         </tbody>
        </table>
      </div>
    )
  }
}

export default Questions;
