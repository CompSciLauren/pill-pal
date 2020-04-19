import { useState, useEffect } from 'react';

export default function useName(personIdentifier) {
  const [name, setName] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (personIdentifier !== null) {
      setIsLoading(true);

      if (personIdentifier !== null) {
        fetch(`https://pillpal-app.de/User/${personIdentifier}`, {
          method: 'GET',
        })
          .then((response) => response.json())
          //If response is in json then in success
          .then((responseJson) => {
            //Success
            setIsLoading(false);
            setName(responseJson[0]);
          })
          //If response is not in json then in error
          .catch((error) => {
            //Error
            console.error(error);
          });
      }
    }
  }, [personIdentifier]);

  return {
    name,
    isLoading,
  };
}
