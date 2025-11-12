const axios = require('axios');

describe('API test deleteActivities', () => {
    let activitiesResponse;
    beforeAll(async () => {
        await activitiesResponse = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Activities/1')
    })
    test('Delete activities should return 200 status code with valid request', async () => {
        await expect(activitiesResponse.status).toEqual(200)
    })
    test('Delete activities should return 400 status code with invalid URL', async () => {
        let activitiesResponse;
        try {
            activitiesResponse = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Activities/1b')
        } catch (err) {
            activitiesResponse = err.response;
        }

        await expect(activitiesResponse.status).toEqual(400)
    })
    test('Delete activities should return 400 status code when trying to delete a non-existing activity', async () => {
        let activitiesResponse;
        try {
            activitiesResponse = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Activities/10000000000')
        } catch (err) {
            activitiesResponse = err.response;
        }

        await expect(activitiesResponse.status).toEqual(400)
    })

})