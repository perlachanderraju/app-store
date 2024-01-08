// Write your code here
import './index.css'

const AppItem = () => {
  const {alist} = props
  const {appName, imgUrl} = alist
  return (
    <li>
      <img src={imgUrl} className="app-icon" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
