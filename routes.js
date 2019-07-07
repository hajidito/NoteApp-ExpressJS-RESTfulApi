'use strict';

module.exports = function(app) {
    const todoList = require('./controller');

    app.get('/',todoList.index);

    //get notes
    app.get('/notes',todoList.showNotes);
    app.get('/notes/:noteId',todoList.showNotes);
    //create note
    app.post('/note',todoList.createNote);
    //update note
    app.patch('/note/:noteId',todoList.updateNote);
    //delete note
    app.delete('/note/:noteId',todoList.deleteNote);
    
    //get categories
    app.get('/categories',todoList.showCategories);
    app.get('/categories/:categoryId',todoList.showCategories);
    //create category
    app.post('/category',todoList.createCategory);
    //update category
    app.patch('/category/:categoryId',todoList.updateCategory);
    //delete category
    app.delete('/category/:categoryId',todoList.deleteCategory);

};