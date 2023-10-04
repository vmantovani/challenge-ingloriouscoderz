import Rectangle from './Components/Rectangle'
import Triangle from './Components/Triangle'

const App = () => {
  return (
    <div>
      <div className="container">
        <div className="grid">
          <pre>
            <Rectangle />
          </pre>
          <pre>
            <Triangle />
          </pre>
        </div>
      </div>
    </div>
  )
}

export default App
