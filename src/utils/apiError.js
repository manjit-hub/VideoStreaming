// To standardize API ERRORS
class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong !!",
        erorrs = [],
        stack = ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.data = null,
        this.erorrs = erorrs,
        this.message = message,
        this.success = false

        if(stack){
            this.stack = stack;
        } else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiError};