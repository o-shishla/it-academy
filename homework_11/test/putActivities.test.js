const axios = require('axios');
const validator = require('jsonschema')
const putActivitiesSchema = require('../schemas/postActivities.v1.json'); //схема одинаковая для пост и пут
describe('API test putActivities', () => {
    let activitiesResponse;
    beforeAll(async () => {
        activitiesResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Activities/1', {
                "id": 0,
                "title": "Title of the book",
                "dueDate": "2025-11-12T15:29:37.813Z",
                "completed": true
            }, {
                "Content-Type": "application/json; v=1.0",
                "accept": "text / plain; v = 1.0"
            }
        )
    })
    test('Put activities should return 200 status code with valid request', async () => {
        await expect(activitiesResponse.status).toEqual(200)
    })
    test('Put activities should return valid response body with valid request', async () => {
        const validationResult = await validator.validate(activitiesResponse.data, putActivitiesSchema)
        await expect(validationResult.valid).toEqual(true)
    })
    test('Put activities should return updated response body with: id change', async () => {
        activitiesResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Activities/1', {
                "id": 0
            }, {
                "Content-Type": "application/json; v=1.0",
                "accept": "text / plain; v = 1.0"
            }
        )
        await expect(activitiesResponse.data).toMatchObject({
            "id": 0
        })
    })
    test('Put activities should return updated response body with: title change', async () => {
        activitiesResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Activities/1', {
                "title": "New title"
            }, {
                "Content-Type": "application/json; v=1.0",
                "accept": "text / plain; v = 1.0"
            }
        )
        await expect(activitiesResponse.data).toMatchObject({
            "title": "New title"
        })
    })
    test('Put activities should return updated response body with: due date change', async () => {
        activitiesResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Activities/1', {
                "dueDate": "2025-12-12T16:53:13.704Z"
            }, {
                "Content-Type": "application/json; v=1.0",
                "accept": "text / plain; v = 1.0"
            }
        )
        await expect(activitiesResponse.data).toMatchObject({
            "dueDate": "2025-12-12T16:53:13.704Z"
        })
    })
    test('Put activities should return updated response body with: completed change', async () => {
        activitiesResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Activities/1', {
                "completed": false
            }, {
                "Content-Type": "application/json; v=1.0",
                "accept": "text / plain; v = 1.0"
            }
        )
        await expect(activitiesResponse.data).toMatchObject({
            "completed": false
        })
    })

    test('Put activities should return 400 status code with invalid URL', async () => {
        let activitiesResponse;
        try {
            activitiesResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Activities/2b', {
                "id": 0,
                "title": "Title of the book",
                "dueDate": "2025-11-12T15:29:37.813Z",
                "completed": true
            }, {
                "Content-Type": "application/json; v=1.0",
                "accept": "text / plain; v = 1.0"
            })
        } catch (err) {
            activitiesResponse = err.response;
        }

        await expect(activitiesResponse.status).toEqual(400)
    })
    test('Put activities should return 400 status code with invalid request body: body absent', async () => {
        let activitiesResponse;
        try {
            activitiesResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Activities/1',
                {}
                , {
                    "Content-Type": "application/json; v=1.0",
                    "accept": "text / plain; v = 1.0"
                })
        } catch (err) {
            activitiesResponse = err.response;
        }

        await expect(activitiesResponse.status).toEqual(400) //баг, приходит 200
    })
    test('Put activities should return 400 status code with invalid request body: invalid id type', async () => {
        let activitiesResponse;
        try {
            activitiesResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Activities/1',
                {
                    "id": "String"
                }
                , {
                    "Content-Type": "application/json; v=1.0",
                    "accept": "text / plain; v = 1.0"
                })
        } catch (err) {
            activitiesResponse = err.response;
        }

        await expect(activitiesResponse.status).toEqual(400)
    })
    test('Put activities should return 400 status code with invalid request body: invalid json', async () => {
        let activitiesResponse;
        try {
            activitiesResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Activities/1',
                {"id": 1,}
                , {
                    "Content-Type": "application/json; v=1.0",
                    "accept": "text / plain; v = 1.0"
                })
        } catch (err) {
            activitiesResponse = err.response;
        }

        await expect(activitiesResponse.status).toEqual(400) //в сваггере приходит 400 с тем же боди
    })
    test('Put activities should return 400 status code with invalid request body: non-existing activity id', async () => {
        let activitiesResponse;
        try {
            activitiesResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Activities/100000000000',
                {"id": 1}
                , {
                    "Content-Type": "application/json; v=1.0",
                    "accept": "text / plain; v = 1.0"
                })
        } catch (err) {
            activitiesResponse = err.response;
        }

        await expect(activitiesResponse.status).toEqual(400)
    })
})