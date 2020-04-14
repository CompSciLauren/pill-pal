import { useState, useEffect } from 'react';

export default function useMedication(personIdentifier, medicationIdentifier) {
  const [medication, setMedication] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://pillpal-app.de/Takes/${personIdentifier}/${medicationIdentifier}`,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        setIsLoading(false);
        setMedication(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        console.error(error);
      });
  }, [personIdentifier, medicationIdentifier]);

  return {
    medication,
    isLoading,
  };
}
