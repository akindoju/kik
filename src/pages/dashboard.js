import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import SideBar from '../components/SideBar/SideBar';
import Timeline from '../components/Timeline';
import LoggedInUserContext from '../context/loggedInUser';
import useUser from '../hooks/use-user';

const Dashboard = ({ user: loggedInUser }) => {
  const { user } = useUser(loggedInUser.uid);

  useEffect(() => {
    document.title = 'Kik';
  }, []);

  return (
    <LoggedInUserContext.Provider value={{ user }}>
      <div className="bg-gray-background">
        <Header />
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
          <Timeline />
          <SideBar />
        </div>
      </div>
    </LoggedInUserContext.Provider>
  );
};

export default Dashboard;

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
};
