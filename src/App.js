import { Container } from 'react-bootstrap';
import './App.css';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import BookView from './pages/BookView';
import BookDetail from './pages/BookDetail';
import BookLike from './pages/BookLike';

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path='/' element={<BookView />} />
        <Route path='/book/:id' element={<BookDetail />} />
        <Route path='/like' element={<BookLike />} />
      </Routes>
    </Container>
  );
}

export default App;
