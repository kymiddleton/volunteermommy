import React from 'react';
import PropTypes from 'prop-types';
import { Card, Message } from 'semantic-ui-react'

const Dashboard = ({ secretData, user }) => (
  <Card className="container">
    <Card
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
  {secretData && <Message style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</Message>}
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;