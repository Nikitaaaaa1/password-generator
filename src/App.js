
import './App.css';
import {useState} from "react";

function App() {
    const [value, setValue] = useState('')
    const [password, setPassword] = useState('')
    let dataS = "qwertyuiopasdfghjklzxcvbnm,./;'[]`1234567890ёйцукенгшщзфывапролдячсмить"
    let dataArr = dataS.split('')
    function random(e) {

        e.preventDefault()
        let pass = ''
        if (value && value < 70) {
            for (let i = 0; i <= value; i++) {
                pass += dataArr[Math.ceil(Math.random() * dataArr.length - 1)]
            }
            setPassword(pass)
            console.log(pass)
            setValue('')
        } else if (!value || value < 0) {
            setPassword('Enter area is empty')
        } else if (value > 10000) setPassword("You wrote so much symbols")


    }

  return (
      <div >
          <div style={{width:"800px", margin:"0 auto"}}>
              <form>
                  <div style={{display:"flex",
                      justifyContent: "space-around"}}>
                      <input
                          placeholder="choose amount of symbols"
                          type="number"
                             value={value}
                             onChange={e => setValue(e.target.value)}
                             style={{width:"200px",
                                 height:"80px",
                                 borderRadius:"10px",
                                 fontSize:"40px",
                                 paddingLeft:'15px'
                             }}/>
                      <button onClick={random} type='submit'
                              style={{width:"150px",
                                  height:"80px",
                                  borderRadius:"10px"}} > click</button>
                  </div>
              </form>

          </div>
          <div style={{width:"80%",height:"600px", border:"1px solid black", margin:"0 auto", overflowX: "hidden", overflowY:"auto",
              fontSize:"30px", display:'flex', justifyContent: "center", alignItems: "center", overflow: 'auto' }}>
              {password}
          </div>
      </div>
  )
}

export default App;
