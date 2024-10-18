import { ToastContainer } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../hooks/isAuth/isAuth';
import Sidebar from '../../components/sidebar/SideBar';
import ProfileDiv from '../../components/profileDiv/profileDiv';
import { fetchUserInfo } from '../../server/profile/profile';

const Profile = () => {
  const { userId, userRole } = useAuth();
  const [userInfo, setUserInfo] = useState(null);

  const [active, setActive] = useState('Profile');

  useEffect(() => {
    const fetchUserData = async () => {
      await fetchUserInfo(userId, setUserInfo);
    };

    fetchUserData();
  }, [userId]);

  return (
    <>
      <ToastContainer />
      <div className="dashboard-container">
        <Sidebar active={active} setActive={setActive} userRole={userRole} />
        <main className="content">
          {userInfo && <ProfileDiv userInfoBase={userInfo} userId={userId} />}
        </main>
      </div>
    </>
  );
};

export default Profile;
