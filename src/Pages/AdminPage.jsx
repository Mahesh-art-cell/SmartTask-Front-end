
import React from 'react';
import AdminDashboard from '../components/admin/AdminDashboard';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';

const AdminPage = () => (
  <div>
    <Header />
    <Sidebar />
    <AdminDashboard />
  </div>
);

export default AdminPage;