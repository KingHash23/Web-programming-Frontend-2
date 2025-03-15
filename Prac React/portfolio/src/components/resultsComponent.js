import { RESULTS } from '../util/ResultsData';

function ResultsComponent() {
  return (
    <section className="py-5">
        <div className="container">
            <h2 className="section-title text-center">Academic Performance</h2>
            <div className="info-card">
                <h4 className="text-center mb-4">Year 1 Semester 1 Results | GPA 5.01</h4>
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

export default ResultsComponent;


