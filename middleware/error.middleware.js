const errorMiddleware = (err, req, res, next) => {
    try {

        let error = {...err};

        error.message = err.message;

        console.error(err);

        //Mongoose bad ObjectId
        if(err.name === 'CasteError'){
            const message = 'Resoure not found';
            error = new Error(message);
            error.statusCode = 404;
        }

        //Mongoose duplicate key
        if(err.code === 11000){
            const message = 'Duplicate field value entered';
            error = new Error(message);
            error.statusCode = 400;
        }

        //Mongoose validation error
        if(err.code === 'ValidationError'){
            const message = Object.values(err.errors).map(val => val.message)
            error = new Error(message.join(', '));
            error.statusCode = 400;
        }

        res.statusCode(error.statusCode || 500).JSON({
            success: false,
            error : error.message || 'Server Error'
        })
        
    } catch (error) {
        next(error)
    }
}

export default errorMiddleware;