'use strict';

const response = require('./res');
const connection = require('./conn');

exports.index = function(req, res) {
    response.ok("welcome to simple note app",'', res)
};

//CRUD notes

exports.showNotes = function(req, res) {
    
    let noteId = req.params.noteId;
    let categoryId = req.query.categoryId;
    let search = req.query.search || '';
    let sort = req.query.sort || 'desc';
    
    //variable for pagination
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 10;
    let offset = ((page * limit) - limit);
    
    //variable for info pagination
    let totalData;
    let totalPage;
    
    //query search, sort, pagination all notes
    let query = `SELECT b.id, b.title, b.note, b.time, c.id as "categoryId", c.name as "categoryName" 
    FROM notes b left join category c on (b.id_category=c.id) 
    where b.title like '%${search}%' order by time ${sort} limit ${limit} offset ${offset}`
    
    //query search, sort, pagination all notes by category
    let query2 = `SELECT b.id, b.title, b.note, b.time, c.id as "categoryId", c.name as "categoryName" 
    FROM notes b left join category c on (b.id_category=c.id) 
    where b.title like '%${search}%' and c.id = ${categoryId} order by time ${sort} limit ${limit} offset ${offset}`
    
    //query total data
    connection.query(`SELECT count(*) as total from notes where title like '%${search}%'`,
            function (error, rows, fields){
            totalData = rows[0].total;
            totalPage = Math.ceil(Number(totalData)/limit); 
    });
    
    //for search by id note with parameter in url
    if (noteId != null){
        connection.query(`SELECT b.id, b.title, b.note, b.time, c.name as "categoryName" 
        FROM notes b left join category c on (b.id_category=c.id) 
        where b.id = ${noteId}`, function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
    }

    if (noteId == null && categoryId ==null){
        connection.query(query, function (error, rows, fields){
            if(error){
                console.log(error)
            }else{
                //search using function infoPage in res.js for show info total data in pagination
                response.pagination(totalData,page,totalPage,limit,rows,res)
            }
        });
    }

    if (noteId == null && categoryId !=null){
        connection.query(query2, function (error, rows, fields){
            if(error){
                console.log(error)
            }else{
                //search using function infoPage in res.js for show info total data in pagination
                response.pagination(totalData,page,totalPage,limit,rows,res)
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
            response.ok(rows, res)
        }
    });
};

exports.updateNote = function(req, res) {
    
    let title = req.body.title;
    let note = req.body.note;
    let noteId = req.params.noteId;
    let categoryId = req.body.categoryId;

    if (title != null && note!= null && categoryId != null){
        connection.query('UPDATE notes SET title = ?, note = ?, id_category = ? WHERE id = ?',
        [ title, note, categoryId, noteId ], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
    }

    if (title != null && note!= null && categoryId == null){
        connection.query('UPDATE notes SET title = ?, note = ? WHERE id = ?',
        [ title, note, noteId ], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
    }
    
};

exports.deleteNote = function(req, res) {
    
    let noteId = req.params.noteId;

    connection.query('DELETE FROM notes WHERE id = ?',
    [ noteId ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.delete(rows, res, noteId)
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
    let image = req.body.image;
    
    connection.query('INSERT INTO category (name, description, image) values (?,?,?)',
    [ name, description, image], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            connection.query(`SELECT * FROM category where id = (select max(id) from category)`,
                function (error, rows, fields){
                    response.ok(rows, res)
                })   
        }
    });
};

exports.updateCategory = function(req, res) {
    
    let name = req.body.name;
    let description = req.body.description;
    let categoryId = req.params.categoryId;

    if (name != null && description!= null){
        connection.query('UPDATE category SET name = ?, description = ? WHERE id = ?',
        [ name, description, categoryId], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
    }
    else{
        return res.send({message : "data cannot be empty" })
    }
};

exports.deleteCategory = function(req, res) {
    
    let categoryId = req.params.categoryId;

    connection.query('DELETE FROM category WHERE id = ?',
    [ categoryId ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.delete(rows, res, categoryId)
        }
    });
};