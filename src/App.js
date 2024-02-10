import Login from './pages/Login/Login';
import { AuthContextProvider } from './context/auth-context';

function App() {
  return (
    <AuthContextProvider>
      <Login />
    </AuthContextProvider>
  );
}

export default App;
