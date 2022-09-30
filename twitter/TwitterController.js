import express from 'express';

import Twitterr from './Twitterr.js';
import ParentIds from '../ParentIds.js';

const router = express.Router();

router.get('/list/trending', (req, res) => {
    let list = ParentIds.list();
    res.render('trends-list', { list });
});

router.get('/trending/:id', async (req, res) => {
    let id = parseFloat(req.params.id);

    let trends = await Twitterr.trends(id);
    let title = trends[0]["locations"][0]["name"];

    res.render('trending-topic', { trends: trends[0]["trends"], title: title });
});

router.post('/profile/', async (req, res) => {
    let user = req.body.user;

    let profile = await Twitterr.profile(user);

    res.render('profile', { profile: profile["data"], user });
});

export default router;