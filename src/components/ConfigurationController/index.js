import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="config-controls-container">
          <div className="responsive-controls-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="content"
                  value={showContent}
                  onChange={onChangeContent}
                />
                <label className="label-element" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="left-navbar"
                  value={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                />
                <label className="label-element" htmlFor="left-navbar">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="Right-navbar"
                  value={showRightNavbar}
                  onChange={onChangeRightNavbar}
                />
                <label className="label-element" htmlFor="Right-navbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
