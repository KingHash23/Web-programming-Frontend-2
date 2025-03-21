import React, { useState } from 'react';
import { academicResults } from '../utils/resultData';

const AcademicResults: React.FC = () => {
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [newCourse, setNewCourse] = useState({
    course: '',
    mark: 0,
    cu: 0,
    gp: 0,
    year: 1,
    semester: 1
  });

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would update the backend
    console.log('New course:', newCourse);
    setShowAddCourse(false);
    setNewCourse({ course: '', mark: 0, cu: 0, gp: 0, year: 1, semester: 1 });
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">Academic Performance</h2>
          <button 
            className="btn btn-light"
            onClick={() => setShowAddCourse(!showAddCourse)}
          >
            {showAddCourse ? 'Cancel' : 'Add Course'}
          </button>
        </div>

        {showAddCourse && (
          <div className="info-card mb-4">
            <h4 className="text-center mb-4">Add New Course</h4>
            <form onSubmit={handleAddCourse}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Course Name"
                    value={newCourse.course}
                    onChange={(e) => setNewCourse({...newCourse, course: e.target.value})}
                    required
                  />
                </div>
                <div className="col-md-2 mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mark"
                    value={newCourse.mark || ''}
                    onChange={(e) => setNewCourse({...newCourse, mark: Number(e.target.value)})}
                    required
                  />
                </div>
                <div className="col-md-2 mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Credit Units"
                    value={newCourse.cu || ''}
                    onChange={(e) => setNewCourse({...newCourse, cu: Number(e.target.value)})}
                    required
                  />
                </div>
                <div className="col-md-2 mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="GP"
                    value={newCourse.gp || ''}
                    onChange={(e) => setNewCourse({...newCourse, gp: Number(e.target.value)})}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <select
                    className="form-control"
                    value={newCourse.year}
                    onChange={(e) => setNewCourse({...newCourse, year: Number(e.target.value)})}
                  >
                    <option value={1}>Year 1</option>
                    <option value={2}>Year 2</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <select
                    className="form-control"
                    value={newCourse.semester}
                    onChange={(e) => setNewCourse({...newCourse, semester: Number(e.target.value)})}
                  >
                    <option value={1}>Semester 1</option>
                    <option value={2}>Semester 2</option>
                  </select>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-light">Add Course</button>
              </div>
            </form>
          </div>
        )}

        {academicResults.map((semester, idx) => (
          <div key={idx} className="info-card mb-4">
            <h4 className="text-center mb-4">
              Year {semester.year} Semester {semester.semester} Results | GPA {semester.gpa}
            </h4>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Mark</th>
                    <th>CU</th>
                    <th>GP</th>
                  </tr>
                </thead>
                <tbody>
                  {semester.courses.map((course, courseIdx) => (
                    <tr key={courseIdx}>
                      <td>{course.course}</td>
                      <td>{course.mark}</td>
                      <td>{course.cu}</td>
                      <td>{course.gp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicResults;