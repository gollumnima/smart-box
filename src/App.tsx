import { useTimer } from './timer'

function App() {
  const PLAY_TIME = 120
  const RECESS_TIME = 60
  const { audioRef, started, setStarted } = useTimer(PLAY_TIME, RECESS_TIME)

  return (
    <>
      <h1>Smart Box</h1>
      <button onClick={() => setStarted(!started)}>{!started ? 'Start': 'Pause'}</button>
      <audio ref={audioRef} controls autoPlay>
        <source src="/media/punch-sound.mp3" type="audio/mpeg" />
      </audio>
    </>
  )
}

export default App
