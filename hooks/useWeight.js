/*useWeight.js*/

import { useState, useEffect } from 'react';

export default function useWeight(personIdentifier) {
  const [weight, setWeight] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const emptyJson = {
    ID: -1,
    Display_Name: 'none',
  };

  useEffect(() => {
    if (personIdentifier !== null) {
      setIsLoading(true);

      fetch(`https://pillpal-app.de/Log_BMI/${personIdentifier}`, {
        method: 'GET',
      })
        .then((response) => response.json())
        //If response is in json then in success
        .then((responseJson) => {
          //Success

          setIsLoading(false);
          if (responseJson[0] != null) {
            setWeight(responseJson);
          } else {
            setWeight(emptyJson);
          }

        })
        //If response is not in json then in error
        .catch((error) => {
          //Error
          console.error(error);
        });
    }
  }, [personIdentifier]);

  return {
    weight,
    isLoading,
  };
}
