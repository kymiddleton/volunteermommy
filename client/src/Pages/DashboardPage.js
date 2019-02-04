import React from 'react';
import API from '../Utils/APIs';
import Auth from '../Utils/Auth';

import Dashboard from '../components/Dashboard.js';


class DashboardPage extends React.Component {
  state = {
    secretData: '',
    user: {}
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    API.dashboard(Auth.getToken())
    .then(res => {
      this.setState({
          secretData: res.data.message,
          user: res.data.user
        });
    })
  }

  /**
   * Render the component.
   */
  render() {
    return (<Dashboard secretData={this.state.secretData} user={this.state.user} />);
  }
}

export default DashboardPage;
