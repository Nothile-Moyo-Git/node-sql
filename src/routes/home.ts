// Import express router for the admin and shop pages
// This file is for the product routes
import express from "express";

// import our express types for TypeScript use
import { Request, Response, NextFunction } from 'express';

// Create our express router
const homeRoutes = express.Router();

// Handling the default route for the home page
homeRoutes.get("/", (request : Request, response : Response, next : NextFunction) => {

    // Send our ejs file to the browser
    response.render('home', { pageTitle : "Home", path : "/"});

});

export default homeRoutes; 