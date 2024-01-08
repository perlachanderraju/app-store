// Write your code here
import './index.css'

const TabItem = () => {
  const {tlist} = props
  const {displayText} = tlist
  return (
    <li>
      <button type="button" className="btn">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
