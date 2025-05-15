import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './components/pageNotFound/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;