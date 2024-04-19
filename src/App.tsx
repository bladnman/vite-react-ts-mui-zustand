import './App.css';
import { VStack } from '@common/mui-stacks.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '@pages/main-page/MainPage.tsx';

function App() {
  return (
    <VStack fill sx={{ flexGrow: 1 }} data-id={'app'}>
      <Router>
        <VStack fill spacing={0} vAlign={'leading'} data-id={'inner-router'}>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </VStack>
      </Router>
    </VStack>
  );
}

export default App;
