import './App.css'
import TextType from './TextType'

function App() {
  return (
    <>
        <h1>
          <TextType
            text={["Hello World!", "Hello guys from CSE310!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>
    </>
  )
}

export default App
