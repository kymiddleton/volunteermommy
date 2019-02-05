// import React from 'react';
// import * as $ from 'axios';
// import API from '../../Utils/APIs';

// class UserDetails extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {}


//         this.getData = this.getData.bind(this);

//     }

//     getData(e) {
//         e.preventDefault();
//         const token = Auth.getToken();
//         API.user(token, userData)
//         $.get('/api/user', )
//         .then((response) => {
//             console.log("response:", response.data);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//     }

//     render () {
//         return (
//         <div>
//             <button onClick={this.getData}></button>
//         </div>
//         )
//     }
        
// }

// export default UserDetails;