import { useState, useEffect } from 'react';

export default function useCalendar(personIdentifier) {
  const [calendar, setCalendar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (personIdentifier !== null) {
      setIsLoading(true);

      fetch(`https://pillpal-app.de/Log_Notes/${personIdentifier}`, {
        method: 'GET',
      })
        .then((response) => response.json())
        //If response is in json then in success
        .then((responseJson) => {
          //Success
          setIsLoading(false);
          setCalendar(responseJson);
        })
        //If response is not in json then in error
        .catch((error) => {
          //Error
          console.error(error);
        });
    }
  }, [personIdentifier]);

  return {
    calendar,
    isLoading,
  };
}
