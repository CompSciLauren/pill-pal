import { useState, useEffect } from 'react';

export default function useLog_Pills(personIdentifier) {
  const [logPills, setLogPills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const emptyJson = {
    Medication_ID: -1,
    Datetime: -1,
    Amount: -1,
    Taken: -1,
  };

  useEffect(() => {
    if (personIdentifier !== null) {
      setIsLoading(true);

      fetch(`https://pillpal-app.de/Log_Pills/${personIdentifier}`, {
        method: 'GET',
      })
        .then((response) => response.json())
        //If response is in json then in success
        .then((responseJson) => {
          //Success
          setIsLoading(false);
          if (responseJson != null) {
            setLogPills(responseJson);
          } else {
            setLogPills(emptyJson);
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
    logPills,
    isLoading,
  };
}
