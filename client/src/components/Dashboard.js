import React from 'react';
import PropTypes from 'prop-types';
// import { Card, Message } from 'semantic-ui-react'
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Dashboard = ({ secretData, user }) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
  {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</CardText>}
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;


/*==TRYING NEW DASHBOARD TO NEST COMPONENTS==*/
/* ====MY ACCOUNT / EVENTS / VOLUNTEERS==== */


// const Dashboard = ({ secretData, user }) => (
//   <Card className="container">
//     <CardTitle
//       title="Dashboard"
//       subtitle="You should get access to this page only after authentication."
//     />
//   {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</CardText>}
//   </Card>
// );

// Dashboard.propTypes = {
//   secretData: PropTypes.string.isRequired
// };

// export default Dashboard;