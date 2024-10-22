import express from 'express';
import AppController from '../controllers/AppController.js';

router = express.Router();

router.get('/hello', (req, res) => {
    AppController.hello(req, res);
})

router.get('/about', (req, res) => {
    AppController.about(req, res);
});

export default router;