import { useState, useEffect } from 'react';

export default function useSymptom() {
  const [symptom, setSymptom] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://pillpal-app.de/Symptom`, {
      method: 'GET',
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        setIsLoading(false);
        setSymptom(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        console.error(error);
      });
  }, []);

  return {
    symptom,
    isLoading,
  };
}
