import axios from 'axios';
export function trafficRequest(config, apiName) {
    return new Promise((resolve, reject) => {

       /*  if (!process.env.SAMPLE_RESPONSE) {
            let response = sampleResponse['dataUsageHistory']()
            return resolve({ isSuccess: true, response: response })
        } */

        let reqStart = new Date().getTime();
        axios(config)
            .then(function (response) {
                let reqEnd = new Date().getTime();
                let timeTaken = reqEnd - reqStart;
                console.log({ ...config, response, timeTaken, timeStamp: new Date().getTime() })

                resolve({ isSuccess: true, response: response })
            }).catch(function (error) {
                let reqEnd = new Date().getTime();
                let timeTaken = reqEnd - reqStart;
                console.log({ ...config, error, timeTaken, timeStamp: new Date().getTime() })
                resolve({ isSuccess: false, error: error })
            })
    })
}

//exports = { trafficRequest };

