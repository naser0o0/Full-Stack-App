import db from "../db/db.js"

/**
 * Articles
 */
export const getArticles = (req, res) =>{
    res.status(200).json({msg: 'Articles'})    
}
export const createArticle = (req, res) =>{
    res.status(200).json({msg: 'Article created'})    
}
export const getSingleArticle = (req, res) =>{
    res.status(200).json({msg: 'Hi single Article'})    
}
export const updateArticle = (req, res) =>{
    res.status(200).json({msg: 'Article updated'})    
}
export const deleteArticle = (req, res) =>{
    res.status(200).json({msg: 'Article deleted'})    
}

/**
 * User Login/Register
 */
 export const userLogin = (req, res) =>{
    res.status(200).json({msg: 'Login successful'})    
}
 export const createUser = (req, res) =>{
    res.status(200).json({msg: 'User created'})    
}
