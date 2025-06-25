
import React from 'react';
import TaskList from '../components/tasks/TaskList';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';

const TasksPage = () => (
  <div>
    <Header />
    <Sidebar />
    <TaskList />
  </div>
);

export default TasksPage;