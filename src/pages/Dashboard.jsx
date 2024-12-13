import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Import the specific CSS file

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:9090/api/students')
      .then(response => {
        const studentsWithDefaults = response.data.map(student => ({
          ...student,
          status: student.status || 'Pending', // Default status if missing
        }));
        setStudents(studentsWithDefaults);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
        setError('Failed to load students');
        setLoading(false);
      });
  }, []);

  const updateStatus = (id, status) => {
    axios.put(`http://localhost:9090/api/students/${id}/status`, null, { params: { status } })
      .then(response => {
        setStudents(students.map(student => student.id === id ? { ...student, status } : student));
      })
      .catch(error => {
        console.error('Error updating status:', error);
      });
  };

  if (loading) return <p>Loading students...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="dashboard-wrapper">
      <h2 className="dashboard-title">Dashboard</h2>
      <h3 className="dashboard-subtitle">Students</h3>
      <ul className="dashboard-student-list">
        {students.length > 0 ? (
          students.map(student => (
            <li key={student.id} className="student-item">
              <div className="student-info">
                <strong>{student.name}</strong> - {student.email}
              </div>
              <div className="student-status">
                Status: <span className={`status-${student.status?.toLowerCase() || 'unknown'}`}>
                  {student.status || 'Unknown'}
                </span>
              </div>
              <div className="student-actions">
                <button onClick={() => updateStatus(student.id, 'Admitted')} className="btn-admit">Admit</button>
                <button onClick={() => updateStatus(student.id, 'Rejected')} className="btn-reject">Reject</button>
                <button onClick={() => updateStatus(student.id, 'Pending')} className="btn-pending">Set Pending</button>
              </div>
            </li>
          ))
        ) : (
          <p>No students available</p>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
