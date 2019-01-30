import React from 'react';
import { Tab } from 'semantic-ui-react'

// const panes = [
//   { menuItem: 'My Details', render: () => <Tab.Pane> Content</Tab.Pane> },
//   { menuItem: 'My Events', render: () => <Tab.Pane>Content</Tab.Pane> },
//   { menuItem: 'My Groups', render: () => <Tab.Pane>Content</Tab.Pane> },
//   { menuItem: 'Organizer View', render: () => <Tab.Pane>Content</Tab.Pane> },
//   { menuItem: 'Archived Events', render: () => <Tab.Pane>Content</Tab.Pane> },
// ]

const Tabs = (props) => <Tab 
panes={props.tabList.map(el => ({ menuItem: el.tabName, render: () => <Tab.Pane> <el.Component/></Tab.Pane> })) }
defaultActiveIndex={0} />


// class Tabs extends Component {
//   state = { activeIndex: 1 }

//   handleRangeChange = e => this.setState({ activeIndex: e.target.value })
//   handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })

//   render() {
//     const { activeIndex } = this.state

//     return (
//       <div>
//         {/* <div>activeIndex: {activeIndex}</div> */}
//         {/* <input type='range' max='2' value={activeIndex} onChange={this.handleRangeChange} /> */}
//         <Tab panes={panes} 
//         activeIndex={activeIndex} 
//         onTabChange={this.handleTabChange} />
//       </div>
//     )
//   }
// }

export default Tabs;