

class AppController {
    static hello(req, res) {
        res.status(200).send('Hello Word');
    }

    static about(req, res) {
        res.status(200).send('I am about');
    }
}

export default AppController;