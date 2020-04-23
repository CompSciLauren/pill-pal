import { useState, useEffect } from 'react';

export default function useFeeling(todaysFeelings) {
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

        const feelingsWithSeverity = responseJson.map((feeling) => {
          let severity = '';

          for (let i = 0; i < todaysFeelings.length; i++) {
            if (feeling.Display_Name == todaysFeelings[i][0]) {
              severity = todaysFeelings[i][1];
            }
          }

          return {
            ...feeling,
            severity,
          };
        });
        setFeeling(feelingsWithSeverity);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        console.error(error);
      });
  }, []);

  const updateFeeling = (severity, individualFeeling) => {
    const updatedFeelings = feeling.map((feel) => {
      if (feel.ID !== individualFeeling.ID) {
        return feel;
      }

      return {
        ...individualFeeling,
        severity,
      };
    });

    setFeeling(updatedFeelings);
  };

  return {
    updateFeeling,
    feeling,
    isLoading,
  };
}
