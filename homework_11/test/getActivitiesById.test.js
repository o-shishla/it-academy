const axios = require('axios');
const validator = require('jsonschema')
const getActivitiesByIDSchema = require('../schemas/getActivitiesByID.v1.json');
describe('API test getActivities by ID', () => {
    let activitiesResponse;
    beforeAll(async () => {
        activitiesResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities/1')
    })
    test('Get activities by ID should return 200 status code with valid request', async () => {
        await expect(activitiesResponse.status).toEqual(200)
    })
    test('Get activities by ID should return valid response body with valid request', async () => {
        const validationResult = await validator.validate(activitiesResponse.data, getActivitiesByIDSchema)
        await expect(validationResult.valid).toEqual(true)
    })
    test('Get activities by ID should return valid response body with valid request by specific ID', async () => {
        await expect(activitiesResponse.data).toMatchObject({
            "id": 1,
            "title": "Activity 1",
            // "dueDate": new Date().getTime(), невозможно проверить, плавающая дата
            "completed": false

        })
    })
    test('Get activities should return 400 status code with invalid URL', async () => {
        let activitiesResponse;
        try {
            activitiesResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities/b')
        } catch (err) {
            activitiesResponse = err.response;
        }
        await expect(activitiesResponse.status).toEqual(400)
    })
    test('Get activities by ID should return 404 status code with non-existing id', async () => {
        let activitiesResponse;
        try {
            activitiesResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities/10000')
        } catch (err) {
            activitiesResponse = err.response;
        }
        await expect(activitiesResponse.status).toEqual(404)
    })
})