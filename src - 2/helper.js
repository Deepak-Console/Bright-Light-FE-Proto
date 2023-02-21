import { trafficRequest } from './utils'

const baseUrl = "http://localhost:8000"

export function getLogGroup() {
    return new Promise(async (resolve, reject) => {
        let reqData = {
            url: baseUrl + '/aws/getloggroups',
            method: 'get',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            data: {}
        }

        let apiName = 'getLogGroup'
        let apiRes = await trafficRequest(reqData, apiName)

        if (apiRes.isSuccess) {
            resolve(apiRes.response.data)
        } else {
            resolve(apiRes.error)
        }
    })
}

export function deleteCronJob(item) {
    return new Promise(async (resolve, reject) => {
        let reqData = {
            url: baseUrl + '/aws/deletecronjob',
            method: 'post',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            data: item
        }

        let apiName = 'deleteCronJob'
        let apiRes = await trafficRequest(reqData, apiName)

        if (apiRes.isSuccess) {
            resolve(apiRes.response.data)
        } else {
            resolve(apiRes.error)
        }
    })
}



export function getQueryDefinitions() {
    return new Promise(async (resolve, reject) => {
        let reqData = {
            url: baseUrl + '/aws/getquerydefinitions',
            method: 'get',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            data: {}
        }

        let apiName = 'getQueryDefinitions'
        let apiRes = await trafficRequest(reqData, apiName)

        if (apiRes.isSuccess) {
            resolve(apiRes.response.data)
        } else {
            resolve(apiRes.error)
        }
    })
}

export async function setUpCronJob(item) {
    return new Promise(async (resolve, reject) => {
        let reqData = {
            url: baseUrl + '/aws/setupcronjob',
            method: 'post',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            data: item
        }

        let apiName = 'setUpCronJob'
        let apiRes = await trafficRequest(reqData, apiName)

        if (apiRes.isSuccess) {
            resolve(apiRes.response.data)
        } else {
            resolve(apiRes.error)
        }
    })
}


export function getCronJob() {
    return new Promise(async (resolve, reject) => {
        let reqData = {
            url: baseUrl + '/aws/getcronjob',
            method: 'get',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            data: {}
        }

        let apiName = 'getCronJob'
        let apiRes = await trafficRequest(reqData, apiName)

        if (apiRes.isSuccess) {
            resolve(apiRes.response.data)
        } else {
            resolve(apiRes.error)
        }
    })
}





