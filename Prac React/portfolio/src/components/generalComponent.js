function GeneralComponent({ heading, paragraph }) {
  return (
    <div className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 hero-text">
            <h1 className="mb-4"><b><i>{heading}</i></b></h1>
            <p className="lead">{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralComponent; 