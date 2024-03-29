import React from "react";
// Dummy data
const tabData = [
    [
      {
        name: 'Smart Search',
        content: `Apple Inc. is an American multinational technology company headquartered in Cupertino, California that designs, develops, and sells consumer electronics, computer software, and online services. The company's hardware products include the iPhone smartphone, the iPad tablet computer, the Mac personal computer, the iPod portable media player, the Apple Watch smartwatch, and the Apple TV digital media player. Apple's consumer software includes the macOS and iOS operating systems, the iTunes media player, the Safari web browser, and the iLife and iWork creativity and productivity suites. Its online services include the iTunes Store, the iOS App Store and Mac App Store, Apple Music, and iCloud.`,
      },
      {
        name: 'File away',
        content: `Google is an American multinational technology company specializing in Internet-related services and products. These include online advertising technologies, search, cloud computing, software, and hardware. Google was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University, in California. Together, they own about 14 percent of its shares, and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a privately held company on September 4, 1998. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its new headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google, Alphabet's leading subsidiary, will continue to be the umbrella company for Alphabet's Internet interests. Upon completion of the restructure, Sundar Pichai became CEO of Google, replacing Larry Page, who became CEO of Alphabet.`,
      },
      {
        name: 'Facebook',
        content: `Facebook is an American for-profit corporation and an online social media and social networking service based in Menlo Park, California. The Facebook website was launched on February 4, 2004, by Mark Zuckerberg, along with fellow Harvard College students and roommates, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes`,
      },
    ],
    [
      {
        name: 'Sony',
        content: `Sony Corporation is a Japanese multinational conglomerate corporation headquartered in Kōnan, Minato, Tokyo. Its diversified business includes consumer and professional electronics, gaming, entertainment, and financial services. The company is one of the leading manufacturers of electronic products for the consumer and professional markets. Sony was ranked 113th on the 2016 list of Fortune Global 500.`,
      },
      {
        name: 'Microsoft',
        content: `Microsoft Corporation is an American multinational technology company headquartered in Redmond, Washington. It develops, manufactures, licenses, supports and sells computer software, consumer electronics, personal computers, and services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface tablet lineup. As of 2016, it is the world's largest software maker by revenue, and one of the world's most valuable companies.`,
      },
      {
        name: 'Nintendo',
        content: `Nintendo Co., Ltd. is a Japanese multinational consumer electronics and video game company headquartered in Kyoto, Japan. Nintendo is one of the world's largest video game companies by market capitalization. Founded on 23 September 1889 by Fusajiro Yamauchi, it originally produced handmade hanafuda playing cards. By 1963, the company had tried several small niche businesses, such as cab services and love hotels. The word Nintendo can be roughly translated from Japanese to English as "leave luck to heaven".`,
      },
    ]
  ];
  
  /*
  *
  * App wrapper
  *
  */
  const History = () =>
    <div class="History">
      <TabContainer defaultTab={0} tabData={tabData[0]}/>
      <TabContainer defaultTab={2} tabData={tabData[1]}/>
    </div>;
  
  /*
  *
  * TabPanel component. 
  * Displays content data passed down by TabContainer.
  *
  */
  const TabPanel = ({ content }) => 
    <div className="TabPanel">
      <p>{content}</p>
    </div>;
  
  /*
  *
  * Tab component.
  *
  */
  class Tab extends React.Component {
    _handleClick(e) {
      const { setCurrentTab, index } = this.props;
      setCurrentTab(index);
    }
  
    render() {
      const { text, isSelected } = this.props;
      return (
        <li 
          className={`Tab${isSelected ? ' is-selected' : ''}`} 
          onClick={this._handleClick.bind(this)}>
          {text}
        </li>
      );
    }
  }
  
  /*
  *
  * TabContainer component.
  *
  */
  class TabContainer extends React.Component {
    constructor(props) {
      super(props);
  
      // Set initial state
      this.state = {
        currentTab: this.props.defaultTab,
      };
      
      // Dummy data
      this._tabData = this.props.tabData;
    }
  
    _setCurrentTab(currentTab) {
      // Don't re-render if current tab is clicked again
      if (this.state.currentTab === currentTab) {
        return;
      }
      this.setState({ currentTab });
    }
  
    _renderTabs() {
      // Map data to Tab component. 
      // Pass index down so we can send it up to this.state later.
      return (
        <ul className="Tabs">
          {
            this._tabData.map((tab, index) => {
              return (
                <Tab
                  index={index}
                  text={tab.name}
                  isSelected={this.state.currentTab === index}
                  setCurrentTab={this._setCurrentTab.bind(this)}
                />
              )
            })
          }
        </ul>
      );
    }
  
    _renderTabPanel() {
      // Map data to TabPanel component
      return this._tabData.map((tab, index) => {
        if (this.state.currentTab === index) {
          return (
            <TabPanel 
              content={tab.content} />
          );
        }
      });
    }
  
    render() {
      const Tabs = this._renderTabs();
      const TabPanel = this._renderTabPanel();
      return (
        <div className="TabContainer">
          {Tabs}
          {TabPanel}
        </div>
      );
    }
  }
  
  /*
  *
  * Render App
  *
  */
  export default(<History />, document.querySelector('#root'))
  