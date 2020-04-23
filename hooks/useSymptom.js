import { useState, useEffect } from 'react';

export default function useSymptom(todaysSymptoms) {
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

        const symptomsWithSeverity = responseJson.map((symptom) => {
          let severity = '';

          for (let i = 0; i < todaysSymptoms.length; i++) {
            if (symptom.Display_Name == todaysSymptoms[i][0]) {
              severity = todaysSymptoms[i][1];
            }
          }

          return {
            ...symptom,
            severity,
          };
        });
        setSymptom(symptomsWithSeverity);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        console.error(error);
      });
  }, []);

  const updateSymptom = (severity, individualSymptom) => {
    const updatedSymptoms = symptom.map((symp) => {
      if (symp.ID !== individualSymptom.ID) {
        return symp;
      }

      return {
        ...individualSymptom,
        severity,
      };
    });

    setSymptom(updatedSymptoms);
  };

  return {
    updateSymptom,
    symptom,
    isLoading,
  };
}
