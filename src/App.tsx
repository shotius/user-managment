import { Route, Routes } from 'react-router-dom';
import { UserDeleteModal } from './components/organizms/modals/UserDeleteModal/UserDeleteModal';
import { UserSetupModal } from './components/organizms/modals/UserSetupModal/UserSetupModal';
import { UserListPage } from './pages/UserListPage';
import { UserInvitationModal } from './components/organizms/modals/UserInviteModal/UserInvitationModal';

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
