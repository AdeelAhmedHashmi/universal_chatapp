const responseMiddleware = (req, res, next) => {
    res.succ = (statusCode = 200, message, data) => {
        res.status(statusCode).json({
            message,
            data,
        });
    };

    res.err = (statusCode = 500, message) => {
        res.status(statusCode).json({
            error: message,
        });
    };

    next();
};

export default responseMiddleware;
