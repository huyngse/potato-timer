import FullPageScroller from "./components/FullPageScroller";
import TimerPage from "./pages/TimerPage";

function App() {
  const slides = [<TimerPage />];
  return <FullPageScroller slides={slides} />;
}

export default App;
