import { Route, Routes } from 'react-router-dom';
import { UserSetupModal } from './components/organizms/UserSetupModal';
import { UserListPage } from './pages/UserListPage';

function App() {
  return (
    <>
      <UserListPage />
      <Routes>
        <Route
          path="/invite-user"
          element={<UserSetupModal isOpen={true} onClose={() => {}} />}
        />
      </Routes>
    </>
  );
}

export default App;
