import { useState } from "react"
import "./App.css"

function App() {
  const initialVal = Array(6).fill("")
  const [nums, setNums] = useState(initialVal)

  const handleInput = (e, idx) => {
    const value = e.target.value
    if (value < 10) {
      const newNums = [...nums]
      newNums[idx] = value
      setNums(newNums)

      if (idx < nums.length - 1) {
        document.getElementById(`otp-input-${idx + 1}`).focus()
      }
    }
  }

  const handleBackspace = (e, idx) => {
    if (e.key === "Backspace") {
      const newNums = [...nums]
      if (!newNums[idx] && idx > 0) {
        document.getElementById(`otp-input-${idx - 1}`).focus()
      }
      newNums[idx] = ""
      setNums(newNums)
    }
  }

  return (
    <div>
      {nums.map((num, idx) => (
        <input
          className="nums"
          type="text"
          key={idx}
          id={`otp-input-${idx}`}
          onChange={(e) => handleInput(e, idx)}
          onKeyDown={(e) => handleBackspace(e, idx)}
          value={num}
        />
      ))}
    </div>
  )
}

export default App
