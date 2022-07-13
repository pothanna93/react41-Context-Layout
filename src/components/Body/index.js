import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar">
              <h1 className="left-nav-heading">Left Navbar Menu</h1>
              <ul className="list-items">
                <li className="item">Item1</li>
                <li className="item">Item2</li>
                <li className="item">Item3</li>
                <li className="item">Item4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content">
              <h1 className="left-nav-heading">Content</h1>
              <p className="content-text">
                Lorem ipsum There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-navbar">
              <h1 className="left-nav-heading">Right Navbar</h1>
              <div className="add-box-container">
                <p className="ad-box">Ad 1</p>
                <p className="ad-box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
