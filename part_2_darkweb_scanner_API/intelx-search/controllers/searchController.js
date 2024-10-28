const intelxService = require('../services/intelxService');

async function search(req, res) {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        const searchId = await intelxService.searchIntelx(query);
        const results = await intelxService.getSearchResults(searchId);
        const dataToReturn = [];

        for (const record of results) {
            const preview = await intelxService.getPreview(record.storageid);
            dataToReturn.push({
                name: record.name || 'No title',
                date: record.date,
                preview,
                link: `https://intelx.io/?did=${record.systemid}`
            });
        }

        res.json(dataToReturn);

    } catch (error) {
        console.error('Detailed error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { search };
