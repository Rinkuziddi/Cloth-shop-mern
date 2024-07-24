const jwt = require('jsonwebtoken');
const checkAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization'];
    if (!auth) {
        return res.status(401).json({ message: 'No token provided.' });
    }
    try {
        const decoded = jwt.verify(auth, process.env.TOKEN_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token.' });
    }
}
module.exports = checkAuthenticated;