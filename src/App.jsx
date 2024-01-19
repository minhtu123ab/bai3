
import './App.css'
import Button from './component/Button'


function App() {
  return (
    <div className='body'>
      <div className='all-1'>
        <Button text='Button 1' padding="10px" 
        fontSize = '16px'/>
        <Button text='Button 2' padding="10px" 
        fontSize = '16px'/>
        <Button text='Button 3' padding="10px" 
        fontSize = '16px'/>
      </div>
      <div className='all-2'>
        <div className='all-2-1'>
          <Button text="Button 1" padding="13px 95px"
          background = "blue" fontSize = '16px' color = "white" borderRadius = '2px'/>
          <Button text="Button 2" padding="13px 95px"
          background = "green" fontSize = '16px' color = "white" borderRadius = '2px'/>
          <Button text="Button 3" padding="13px 95px"
          background = "orange" fontSize = '16px' color = "white" borderRadius = '2px'/>
          <Button text="Button 4" padding="13px 95px"
          background = "red" fontSize = '16px' color = "white" borderRadius = '2px'/>
        </div>
        <div className='all-2-2'>
          <div className='all-2-3'>
            <Button text="Button 1" padding="13px 95px" borderRadius='4px' border = "1px solid white" fontSize = '16px'/>
          </div>
          <div className='all-2-3'>
            <Button text="Button 2" padding="13px 95px" borderRadius='4px' border = "1px solid white" fontSize = '16px' color = 'green' background = 'white'/>
          </div>
          <div className='all-2-4'>
            <Button text="Button 3" padding="13px 95px" borderRadius='4px' border = "1px solid white" fontSize = '16px' color = 'blue' background = 'white'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
