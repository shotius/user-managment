import { Route, Routes } from 'react-router-dom';
import { UserInvitationModal } from './components/organizms/modals/UserInvitationModal';
import { UserDeleteModal } from './components/organizms/UserDeleteModal';
import { UserSetupModal } from './components/organizms/UserSetupModal';
import { UserListPage } from './pages/UserListPage';

function App() {
  return (
    <>
      <UserListPage />
      <Routes>
        <Route path="/setup-user" element={<UserSetupModal />} />
        <Route path="/invite-user" element={<UserInvitationModal />} />
        <Route path="/delete-user" element={<UserDeleteModal />} />
      </Routes>
    </>
  );
}

export default App;
