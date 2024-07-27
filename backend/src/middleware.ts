import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_MERCHANT_PASS, JWT_USER_PASS } from "./config";

export const userAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"] as unknown as string;
    
    const verified = jwt.verify(token, JWT_USER_PASS);

    if (verified) { 
        // @ts-ignore
        req.id = verified.id;
        next();
    } else {
        return res.status(403).json({
            message: "Not authorized"
        })
    }
    
}

export const merchantAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"] as unknown as string;
    
    const verified = jwt.verify(token, JWT_MERCHANT_PASS);

    if (verified) { 
        // @ts-ignore
        req.id = verified.id;
        next();
    } else {
        return res.status(403).json({
            message: "Not authorized"
        })
    }
    
}