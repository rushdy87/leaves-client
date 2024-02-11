import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { Login, Employees } from './pages';
import { AuthContext } from './context/auth-context';
import { Navbar } from './components';

function App() {
  const { user } = useContext(AuthContext);

  const renderRoutes = user ? (
    <Routes>
      <Route path='/' element={<h1>Hi there</h1>} />
      <Route path='/employees' element={<Employees />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  );

  return (
    <Router>
      <Navbar />
      {renderRoutes}
    </Router>
  );
}

export default App;
