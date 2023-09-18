// import Rectangle from './Components/Rectangle'
// import Triangle from './Components/Triangle'
import { Shape } from './Components/Shape'
import './Styles/App.css'

const App = () => {
  return (
    <div>
      <div className="container">
        <Shape type="rectangle" />
        <Shape type="triangle" />
      </div>
    </div>
  )
}

export default App
