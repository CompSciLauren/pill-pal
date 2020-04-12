import { useState, useEffect } from 'react';

export default function useName() {
  const [name, setName] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://pillpal-app.de/User/email@gmail.com', {
      method: 'GET',
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        setIsLoading(false);
        setName(responseJson.First_Name);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        console.error(error);
      });
  }, []);

  return {
    name,
    isLoading,
  };
}
