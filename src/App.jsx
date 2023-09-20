import Rectangle from './Components/Rectangle'
import Triangle from './Components/Triangle'
import './Styles/App.css'

const App = () => {
  return (
    <div>
      <div className="container">
        <div className="grid">
          <div>
            <Rectangle />
          </div>
          <div>
            <Triangle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
