import React from 'react';
import AdultContainer from '../../containers/AdultContainer.js';
import ChildContainer from '../../containers/ChildContainer.js';
// import UserDetails from './UserDetails';
// import RaisedButton from 'material-ui/RaisedButton';
import AccountHolder from './AccountHolder';

class MyDetails extends React.Component {


    render() {
        return (
            <div>
                <div>
                <AccountHolder />
                </div>

                <div>
                    <h1>Volunteers</h1>
                    <AdultContainer />
                    <button>Add New Volunteer</button>
                    <button>Delete Volunteer</button>
                </div>

                <div>
                    <h1>Child(ren)</h1>
                    <ChildContainer />
                    <button>Add New Volunteer</button>
                    <button>Delete Volunteer</button>
                </div>

            </div>    
        );
    }
}

export default MyDetails;


        // const MyDetails = (props) => (

//     <div>
//         <div>
//             <input label="name" placeholder="name" />
//             <input placeholder="full name" /><br />
//             <input label="email" placeholder="email"/> 
//             <input placeholder="email" /><br />
//             {/* <input label="password" placeholder="password"/> 
//             <input placeholder="password" /> */}
//         </div>

//         <h3>Volunteers</h3>
//             <div>
//                 <input placeholder="full name" />
//                 <input placeholder="email" />
//                 <input placeholder="phone" />
//                 <input placeholder="relationship" />

//                 <button type="submit" label="Add"></button>
//                 <button type="submit" label="Delete"></button>
//             </div>


//             <h3>Children</h3>
//             <div>
//                 <input placeholder="full name" />
//                 <input placeholder="grade" />
//                 <input placeholder="teacher" />
//                 <input placeholder="class days" />

//                 <button type="submit" label="Add"></button>
//                 <button type="submit" label="Delete"></button>
//             </div>
//     </div>
// )

// export default MyDetails; 