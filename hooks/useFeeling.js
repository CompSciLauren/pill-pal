import { useState, useEffect } from 'react';

export default function useFeeling() {
  const [feeling, setFeeling] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://pillpal-app.de/Feeling`, {
      method: 'GET',
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        setIsLoading(false);
        setFeeling(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        console.error(error);
      });
  }, []);

  return {
    feeling,
    isLoading,
  };
}
