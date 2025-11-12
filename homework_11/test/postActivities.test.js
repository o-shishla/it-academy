const axios = require('axios');
const validator = require('jsonschema')
const postActivitiesSchema = require('../schemas/postActivities.v1.json');
describe('API test postActivities', () => {
    let activitiesResponse;
    beforeAll(async () => {
        activitiesResponse = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Activities', {
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
    test('Post activities should return 200 status code with valid request', async () => {
        await expect(activitiesResponse.status).toEqual(200)
    })
    test('Post activities should return valid response body with valid request', async () => {
        const validationResult = await validator.validate(activitiesResponse.data, postActivitiesSchema)
        await expect(validationResult.valid).toEqual(true)
    })
    test('Post activities should return 404 status code with invalid URL', async () => {
        let activitiesResponse;
        try {
            activitiesResponse = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Activities1', {
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

        await expect(activitiesResponse.status).toEqual(404)
    })
    test('Post activities should return 400 status code with invalid request body: id absent', async () => {
        let activitiesResponse;
        try {
            activitiesResponse = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Activities', {
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

        await expect(activitiesResponse.status).toEqual(400)//баг, приходит 200
    })

    test('Post activities should return 400 status code with invalid request body: title absent', async () => {
        let activitiesResponse;
        try {
            activitiesResponse = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Activities', {
                "id": 0,
                "dueDate": "2025-11-12T15:29:37.813Z",
                "completed": true
            }, {
                "Content-Type": "application/json; v=1.0",
                "accept": "text / plain; v = 1.0"
            })
        } catch (err) {
            activitiesResponse = err.response;
        }
        await expect(activitiesResponse.status).toEqual(400)//баг, приходит 200
    })
    test('Post activities should return 400 status code with invalid request body: dueDate absent', async () => {
        let activitiesResponse;
        try {
            activitiesResponse = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Activities', {
                "id": 0,
                "title": "Title of the book",
                "completed": true
            }, {
                "Content-Type": "application/json; v=1.0",
                "accept": "text / plain; v = 1.0"

            })
        } catch (err) {
            activitiesResponse = err.response;
        }
        await expect(activitiesResponse.status).toEqual(400) //баг, приходит 200
    })
    test('Post activities should return 400 status code with invalid request body: completed absent', async () => {
        let activitiesResponse;
        try {
            activitiesResponse = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Activities', {
                "id": 0,
                "dueDate": "2025-11-12T15:29:37.813Z",
                "title": "Title of the book"
            }, {
                "Content-Type": "application/json; v=1.0",
                "accept": "text / plain; v = 1.0"
            })
        } catch (err) {
            activitiesResponse = err.response;
        }
        await expect(activitiesResponse.status).toEqual(400)//баг, приходит 200
    })
})