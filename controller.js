'use strict';

const response = require('./res');
const connection = require('./conn');

exports.index = function(req, res) {
    response.ok("welcome to simple note app",'', res)
};

//CRUD notes

exports.showNotes = function(req, res) {
    
    let noteId = req.params.noteId;
    let search = req.query.search || '';
    let sort = req.query.sort || 'desc';
    
    //variable for pagination
    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    let offset = ((page * limit) - limit);
    
    //variable for info pagination
    let totalData;
    let totalPage;
    
    //query search, sort, pagination
    let query = `SELECT b.*, c.name as "categoryName", c.description as "categoryDescription" 
    FROM notes b join category c on (b.id_category=c.id) 
    where b.title like '%${search}%' order by time ${sort} limit ${limit} offset ${offset}`
    
    //query total data
    connection.query(`SELECT count(*) as total from notes where title like '%${search}%'`,
            function (error, rows, fields){
            totalData = rows[0].total;
            totalPage = Math.ceil(Number(totalData)/limit); 
    });
    
    //for search by id note with parameter in url
    if (noteId != null){
        connection.query('SELECT * FROM notes where id = ?',
        [ noteId ], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
    }

    if (noteId == null){
        connection.query(query, function (error, rows, fields){
            if(error){
                console.log(error)
            }else{
                //search using function ok2 in res.js for show info total data in pagination
                response.ok2(totalData,page,totalPage,limit,rows,res)
            }
        });
    }
};

exports.createNote = function(req, res) {
    
    let title = req.body.title;
    let note = req.body.note;
    let categoryId = req.body.categoryId;

    connection.query('INSERT INTO notes (title, note, id_category) values (?,?,?)',
    [ title, note, categoryId ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("success add note!", res)
        }
    });
};

exports.updateNote = function(req, res) {
    
    let title = req.body.title;
    let note = req.body.note;
    let noteId = req.body.noteId;
    let categoryId = req.body.categoryId;

    connection.query('UPDATE notes SET title = ?, note = ?, id_category = ? WHERE id = ?',
    [ title, note, categoryId, noteId ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("success change note!", res)
        }
    });
};

exports.deleteNote = function(req, res) {
    
    let noteId = req.body.noteId;

    connection.query('DELETE FROM notes WHERE id = ?',
    [ noteId ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("success delete note!", res)
        }
    });
};

//CRUD category
exports.showCategories = function(req, res) {
    
    let categoryId = req.params.categoryId;
    
    if (categoryId != null){
        connection.query(`SELECT * FROM category where id = ${categoryId}`, function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
    }

    if (categoryId == null){
        connection.query(`SELECT * FROM category`, function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
    }
};

exports.createCategory = function(req, res) {
    
    let description = req.body.description;
    let name = req.body.name;

    connection.query('INSERT INTO category (name, description) values (?,?)',
    [ name, description], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("success add category!", res)
        }
    });
};

exports.updateCategory = function(req, res) {
    
    let name = req.body.name;
    let description = req.body.description;
    let categoryId = req.body.categoryId;

    connection.query('UPDATE category SET name = ?, description = ? WHERE id = ?',
    [ name, description, categoryId], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("success change category!", res)
        }
    });
};

exports.deleteCategory = function(req, res) {
    
    let categoryId = req.body.categoryId;

    connection.query('DELETE FROM category WHERE id = ?',
    [ categoryId ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("success delete category!", res)
        }
    });
};