const axios = require('axios');
const validator = require('jsonschema')
const getActivitiesSchema = require('../schemas/getActivities.v1.json');
describe('API test getActivities', () => {
    let activitiesResponse;
    beforeAll(async () => {
        activitiesResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities')
    })
    test('Get activities should return 200 status code with valid request', async () => {
        await expect(activitiesResponse.status).toEqual(200)
    })
    test('Get activities should return valid response body with valid request', async () => {
        const validationResult = await validator.validate(activitiesResponse.data, getActivitiesSchema)
        await expect(validationResult.valid).toEqual(true)
    })
    test('Get activities should return 404 status code with invalid URL', async () => {
        let activitiesResponse;
        try {
            activitiesResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities1')
        } catch (err) {
            activitiesResponse = err.response;
        }

        await expect(activitiesResponse.status).toEqual(404)
    })
})