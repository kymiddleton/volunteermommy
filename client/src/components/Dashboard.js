import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import '../css/dashboard.css';

const Dashboard = ({ secretData, user }) => (
  <Card color='blue' className="ui centered card">
    <Card.Content>
      <Card.Header>Dashboard</Card.Header>
      <Card.Description>Page access granted ONLY after authentication.</Card.Description>
      {secretData && <Card.Meta style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</Card.Meta>}
    </Card.Content>
  </Card>
);
  
Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;