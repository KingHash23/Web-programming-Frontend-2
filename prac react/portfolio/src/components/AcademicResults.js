// // components/AcademicResults.js
// import React from 'react';

// function AcademicResults() {
//   return (
//     <section className="py-5">
//       <div className="container">
//         <h2 className="section-title text-center">Academic Performance</h2>
//         <div className="info-card">
//           <h4 className="text-center mb-4">Year 1 Semester 1 Results | GPA 5.01</h4>
//           <div className="table-responsive">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>Course Code</th>
//                   <th>Course Title</th>
//                   <th>Grade</th>
//                   <th>Credit Units</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>CS101</td>
//                   <td>Structured Programming</td>
//                   <td>A</td>
//                   <td>4</td>
//                 </tr>
//                 <tr>
//                   <td>MTH102</td>
//                   <td>Probability and Statistics</td>
//                   <td>B</td>
//                   <td>3</td>
//                 </tr>
//                 <tr>
//                   <td>CS103</td>
//                   <td>Fundumentals of Computing</td>
//                   <td>A</td>
//                   <td>4</td>
//                 </tr>
//                 <tr>
//                   <td>ENG104</td>
//                   <td>Writing and study skills</td>
//                   <td>B</td>
//                   <td>3</td>
//                 </tr>
//                 <tr>
//                   <td>CS105</td>
//                   <td>Essentials of Hardware and Software Concepts</td>
//                   <td>A</td>
//                   <td>4</td>
//                 </tr>
//                 <tr>
//                   <td>UOT102</td>
//                   <td>Understanding the old testament</td>
//                   <td>B</td>
//                   <td>3</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AcademicResults;
// components/AcademicResults.js
import React from 'react';
import { RESULTS } from "../util/AcademicResultData";

function AcademicResults() {
  console.log("My Results", RESULTS);
  
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="section-title text-center">Academic Performance</h2>
        <div className="info-card">
          <h4 className="text-center mb-4">YEAR ONE SEMESTER ONE RESULTS | GPA 5.01</h4>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Title</th>
                  <th>Grade</th>
                  <th>Credit Units</th>
                </tr>
              </thead>
              <tbody>
                {RESULTS.map((result) => (
                  <tr key={result.id}>
                    <td>{result.course_code}</td>
                    <td>{result.course_title}</td>
                    <td>{result.grade}</td>
                    <td>{result.credit_units}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcademicResults;