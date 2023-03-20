import {Routes , Route, BrowserRouter} from 'react-router-dom';

import HomePages  from './pages/Home'
import RoomPage from './pages/Room';

function App() {
  return (
    <BrowserRouter basename='/video-chat-app'>
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/room/:roomId" element={<RoomPage />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
