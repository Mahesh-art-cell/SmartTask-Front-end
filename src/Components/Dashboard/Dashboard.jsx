
import React from 'react';
import TasksChart from './TasksChart';
import TasksDueToday from './TasksDueToday';
import UpcomingTasks from './UpcomingTasks';
import PopularCategories from './PopularCategories';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <TasksChart />
    <TasksDueToday />
    <UpcomingTasks />
    <PopularCategories />
  </div>
);

export default Dashboard;