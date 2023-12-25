import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  const handleEnableLocalization = () => {

    //  after all , redirect  him to this page https://www.instagram.com/rihab_elna
  };

  return (
    <>
      <div className="fullscreen-page d-flex align-items-center justify-content-center text-center bg-light  rounded p-5">
        <div>
          <h1 className="mb-4">
            <img className='rounded' width={60} src='/img.jpg' /> rihab-elna-queen
            مرحبًا بكم في حساب </h1>
          <h4>
            هذا حساب خاص لا يمكن الولوج اليه الا من افريقيا <br />شغل موقعك للولوج
          </h4>
          <Button variant="secondary mt-5" size="lg" onClick={handleEnableLocalization}>
            تفعيل الموقع
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
