import { ToastContainer } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../hooks/isAuth/isAuth';
import Sidebar from '../../components/sidebar/SideBar';
import ManageUserDiv from '../../components/ManageUser/manageUser';
import { handleGetAllUser, handleUpdateUser } from '../../server/admin/admin';

const ViewBookingPage = () => {
  const { userId, userRole } = useAuth();
  const [users, setAllUsers] = useState(null);

  const [active, setActive] = useState('ManageUsers');

  useEffect(() => {
    const fetchUserData = async () => {
      await handleGetAllUser(setAllUsers);
    };

    fetchUserData();
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="dashboard-container">
        <Sidebar active={active} setActive={setActive} userRole={userRole} />
        <main className="content">
          {users && (
            <ManageUserDiv
              users={users}
              title="My Users"
              subtitle="User"
              handleUpdateUser={handleUpdateUser}
              setAllUsers={setAllUsers}
            />
          )}
        </main>
      </div>
    </>
  );
};

export default ViewBookingPage;
