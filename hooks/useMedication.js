import { useState, useEffect } from 'react';

export default function useMedication() {
  const [medication, setMedication] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const emptyJson = {
    ID: -1,
    Display_Name: 'none',
  };

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://pillpal-app.de/Medication`, {
      method: 'GET',
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        setIsLoading(false);
        if (responseJson[0] != null) {
          setMedication(responseJson);
        } else {
          setMedication(emptyJson);
        }
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        console.error(error);
      });
  }, []);

  return {
    medication,
    isLoading,
  };
}
