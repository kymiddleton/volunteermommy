import React from 'react';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: this.props.firstName + this.props.lastName 
        }
    }
    

    render () {
        const fullName = `${this.props.firstName} ${this.props.lastName}`
        
        return (
            <div>
                {fullName}
            </div>
        )
    }
}

export default UserProfile;