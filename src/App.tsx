import {useState} from 'react'
import reactLogo from './assets/react.svg'
import videoH264 from './assets/video-h264.mp4'
import videoHevc from './assets/video-hevc.mp4'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div>
                <h2>Vite Public Video</h2>
                <video width="320" height="240" controls>
                    <source src="/assets/video-h264.mp4" type="video/mp4"/>
                </video>
                <video width="320" height="240" controls>
                    <source src="/assets/video-hevc.mp4" type="video/mp4"/>
                </video>
            </div>
            <div>
                <h2>Vite Src Video</h2>
                <video width="320" height="240" controls>
                    <source src={videoH264} type="video/mp4"/>
                </video>
                <video width="320" height="240" controls>
                    <source src={videoHevc} type="video/mp4"/>
                </video>
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
