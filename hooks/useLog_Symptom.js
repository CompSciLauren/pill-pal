import { useState, useEffect } from 'react';

export default function useLog_Symptom(personIdentifier) {
  const [symptom, setSymptom] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://pillpal-app.de/Log_Symptoms/${personIdentifier}`, {
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
  }, [personIdentifier]);

  return {
    symptom,
    isLoading,
  };
}
