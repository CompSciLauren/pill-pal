/*useWeight.js*/

import { useState, useEffect } from 'react';

export default function useWeight(personIdentifier) {
  const [weight, setWeight] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (personIdentifier !== null) {
      setIsLoading(true);

      fetch(`https://pillpal-app.de/Log_BMI/`, {
        method: 'GET',
      })
        .then((response) => response.json())
        //If response is in json then in success
        .then((responseJson) => {
          //Success
          //console.log(responseJson)
          setIsLoading(false);
          //setWeight(responseJson);
          //console.log(responseJson[0].User_ID)
          //console.log(responseJson.length)

          var weightArr = [];
          var dateArr = [];
          var final = new Array(responseJson.length);

          for (var i = 0; i < responseJson.length; i++) {
            final[i] = new Array(2);
          }

          for(var i = 0; i < responseJson.length; i++){
              var k = responseJson[i].Weight;
              var j = responseJson[i].Date;
              final[i][0] = String(k);
              final[i][1] = String(j);
              weightArr.push(k);
              dateArr.push(j);
              console.log(final[i][0]);
              console.log(final[i][1]);
          }
          setWeight(final);
         // wieght = final;
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
