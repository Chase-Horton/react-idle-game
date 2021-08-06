import React from "react";
import TabButton from "./TabButton.jsx";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.tabs = [
      { name: "tab-button-jobs", text: "Jobs/Units" },
      { name: "tab-button-buildings", text: "Buildings" },
      {
        name: "tab-button-production",
        text: "Production"
      },
      { name: "tab-button-science", text: "Science", extraClass: "tab-locked" },
      {
        name: "tab-button-territory",
        text: "Territory",
        extraClass: "tab-locked"
      },
      {
        name: "tab-button-mutations",
        text: "Mutations",
        extraClass: "tab-unlock"
      }
    ];
    this.state = {
      activePage: "jobs"
    };
  }

  getPageName = (tabName) => {
    var n = tabName.split("-");
    return n[n.length - 1];
  };

  //Called by TabButton function on onClick action, will in full project main page will
  //be passed up to the app
  handleTabClicked = (e) => {
    let page = this.getPageName(e.id);
    this.props.changePage(page);

    this.setState(() => {
      return { activePage: page };
    });
  };

  render() {
    return (
      <nav
        className="flex px-16 justify-between rounded-b-lg bg-blue-100 py-4"
        id="tab-bar"
      >
        {this.tabs.map((tab) => {
          return (
            <TabButton
              key={tab.name}
              name={tab.name}
              text={tab.text}
              active={this.getPageName(tab.name) === this.state.activePage}
              extraClass={tab.extraClass}
              onTabChanged={this.handleTabClicked}
            />
          );
        })}
      </nav>
    );
  }
}

export default NavBar;
