function middleware(req, res, next) {
    if (!req.headers) {
        return res.status(400).json({ message: 'No headers Provided' });
    }
    if (!req.headers.authorization) {
        return res.status(400).json({ message: 'No Authorization Provided' });
    }
    next();
}

module.exports = middleware;