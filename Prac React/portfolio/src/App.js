import GeneralComponent from './components/generalComponent';
import HobbyVideo from './components/hobbyComponent';
import ContactInformation from './components/contactInformation';
import CareerGoal from './components/careerGoals';
import ResultComponent from './components/ResultComponent';

function App() {
  return (
    <>
    {/* imposrt app.css */}
    <link rel="stylesheet" href="./App.css"/>
      <GeneralComponent
        heading="I'M"
        paragraph="Obba Mark Calvin a Year 2 Computer Science student with a passion for web development, data analysis, and technology-driven solutions."
      /> 
      <HobbyVideo/>
      <ResultComponent/>
      <ContactInformation/>
      <CareerGoal/>
    </>
  )
}

export default App;