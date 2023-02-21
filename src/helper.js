const AWS = require('aws-sdk');
var cloudwatchlogs = new AWS.CloudWatchLogs({
    "accessKeyId": "AKIAWFQXPGPV7C7VVQT2", "secretAccessKey": "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", "region": "us-east-1"
});
const cron = require('node-cron');

export function getLogGroup() {
    return new Promise((resolve, reject) => {

        var params = {
            limit: 40
        };


        cloudwatchlogs.describeLogGroups(params, function (err, data) {
            if (err) {
                console.log("REST Request for /loggroup : Error Occured");
                console.log(err, err.stack); // an error occurred
                resolve({ error: "REST Request for /loggroup : Error Occured!" })
            }
            else {
                console.log("REST Request for /loggroup : Success");
                console.log(JSON.stringify(data));
                resolve(data)
            }

        });

    })
}

export function getQueryDefinitions() {
    return new Promise((resolve, reject) => {
        cloudwatchlogs.describeQueryDefinitions({}, function (err, data) {
            if (err) resolve(err, err.stack); // an error occurred
            else resolve(data);           // successful response
        });
    })
}

export async function setUpCronJob(item) {

    const documentClient = new AWS.DynamoDB.DocumentClient({
        "accessKeyId": "AKIAWFQXPGPV7C7VVQT2", "secretAccessKey": "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", "region": "us-east-1"
    });

    let responseBody = "";
    let statusCode = 0;

    const params = {
        TableName: "CronJobs",
        Item: item
    };

    try {
        const data = await documentClient.put(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 201;
    } catch (err) {
        responseBody = `Unable to put Product: ${err}`;
        statusCode = 403;
    }

    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json"
        },
        body: responseBody
    };

    return response;
}


export function getCronJob() {
    return new Promise(async (resolve, reject) => {
        const documentClient = new AWS.DynamoDB.DocumentClient({
            "accessKeyId": "AKIAWFQXPGPV7C7VVQT2", "secretAccessKey": "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", "region": "us-east-1"
        });


        let responseBody = "";
        let statusCode = 0;

        const params = {
            TableName: "CronJobs"
        };

        try {
            const data = await documentClient.scan(params).promise();
            console.log('CronJobs', data)
            responseBody = data//JSON.stringify(data.Items);
            statusCode = 200;
        } catch (err) {
            responseBody = `Unable to get Products: ${err}`;
            statusCode = 403;
        }

        const response = {
            statusCode: statusCode,
            headers: {
                "Content-Type": "application/json"
            },
            body: responseBody
        };

        resolve(response)
    })
}

let RECURING_TYPES = {
    HOURLY: 'HOURLY',
    DAILY: 'DAILY',
    WEEKLY: 'WEEKLY',
    MONTHLY: 'MONTHLY'
}

const CronPaternGenerator = ({
    recurringType,
    dayOfWeek,
    dayOfMonth,
    hour,
    minute,
}) => {
    try {
        switch (recurringType) {
            case RECURING_TYPES.DAILY: {
                return `0 ${minute} ${hour} * * *`;
            }

            case RECURING_TYPES.WEEKLY: {
                return `0 ${minute} ${hour} * * ${dayOfWeek}`;
            }
            case RECURING_TYPES.MONTHLY: {
                return `0 ${minute} ${hour} ${dayOfMonth} * *`;
            }
            default:
                return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};


let cronJobs = {};

createCronJob(1, 'DAILY', 9, 'MON', 17, 6)
async function createCronJob({
    jobId,
    recurringType,
    dayOfMonth,
    dayOfWeek,
    hour,
    minute,
}) {
    return new Promise(async (resolve, reject) => {
        try {
            const pattern = CronPaternGenerator({
                jobId,
                recurringType,
                dayOfMonth,
                dayOfWeek,
                hour,
                minute,
            });
            const task = cron.schedule(pattern, () => {
                console.log('task is running', pattern);
            });

            console.log('task', task)
            cronJobs[jobId] = task;
            resolve({});
        } catch (err) {
            reject(err);
        }
    });
}



