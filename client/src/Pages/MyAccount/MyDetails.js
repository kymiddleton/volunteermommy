import React from 'react';
// import Auth from '../../Utils/Auth';
// import API from '../../Utils/APIs'
// import { Segment, Header, Divider } from 'semantic-ui-react';
import '../../css/mydetails.css';
// import * as $ from 'axios';

import UserProfile from '../../components/UserProfile';
// import MyVolunteers from '../../components/MyVolunteers';

class MyDetails extends React.Component {
    

    render() {
        
        return (
            <div>
                <div>
                    <UserProfile />
                </div > 


                <div>
                    {/* <MyVolunteers /> */}
                </div>

                <div>
                    {/* <h1>Enrolled Child(ren)</h1> */}
                </div>
                
            </div>
        );
    }
}

export default MyDetails;