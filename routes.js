'use strict';

module.exports = function(app) {
    const todoList = require('./controller');

    app.get('/',todoList.index);

    //route for notes
    app.get('/notes',todoList.showNotes);
    app.get('/notes/:noteId',todoList.showNotes);
    app.post('/note',todoList.createNote);
    app.patch('/note',todoList.updateNote);
    app.delete('/note',todoList.deleteNote);
    
    //route for category
    app.get('/categories',todoList.showCategories);
    app.get('/categories/:categoryId',todoList.showCategories);
    app.post('/category',todoList.createCategory);
    app.patch('/category',todoList.updateCategory);
    app.delete('/category',todoList.deleteCategory);

};