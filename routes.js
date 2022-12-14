import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/search', (req, res) => {
    res.render('search-user');
});

export default router;