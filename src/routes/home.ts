// Import express router for the admin and shop pages
// This file is for the product routes
import express from "express";
import path from "path";
import rootDir from "../util/path";

// import our express types for TypeScript use
import { Request, Response, NextFunction } from 'express';

// Create our express router
const homeRoutes = express.Router();

// Handling the default route for the home page
homeRoutes.get("/", (request : Request, response : Response, next : NextFunction) => {

    // Send our HTML file to the browser
    response.sendFile(path.join(rootDir, "views/home.html"));

});

export default homeRoutes;