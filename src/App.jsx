import Rectangle from './Components/Rectangle'
import Triangle from './Components/Triangle'
// import './Styles/App.css'

const App = () => {
  return (
    <div>
      <div className="container">
        <div className="grid">
          <Rectangle />
          <Triangle />
        </div>
      </div>
    </div>
  )
}

export default App
