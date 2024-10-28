const axios = require('axios');
const { API_KEY, API_URL } = require('../config/config');

async function searchIntelx(query) {
    const searchResponse = await axios.post(
        `${API_URL}intelligent/search`,
        {
            term: query,
            maxresults: 10,
            media: 0,
            sort: 2,
            terminate: []
        },
        { headers: { 'x-key': API_KEY } }
    );
    return searchResponse.data.id;
}

async function getSearchResults(searchId) {
    const resultResponse = await axios.get(
        `${API_URL}intelligent/search/result`,
        {
            headers: { 'x-key': API_KEY },
            params: {
                id: searchId,
                limit: 10,
                statistics: 1,
                previewlines: 8
            }
        }
    );
    return resultResponse.data.records || [];
}

async function getPreview(storageId) {
    const previewResponse = await axios.get(
        `${API_URL}file/preview`,
        {
            headers: { 'x-key': API_KEY },
            params: {
                sid: storageId,
                f: 0,
                l: 8,
                c: 1,
                m: 1,
                b: 'pastes',
                k: API_KEY
            }
        }
    );
    return previewResponse.data;
}

module.exports = { searchIntelx, getSearchResults, getPreview };
