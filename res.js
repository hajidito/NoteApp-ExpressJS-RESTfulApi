'use strict'

exports.ok = function(values, res) {
    var data = {
        'status': 200,
        'values': values
    };
    res.json(data);
    res.end();
};

exports.delete = function(values, res, id) {
    var data = {
        'status': 200,
        'values': values,
        'id' : id
    };
    res.json(data);
    res.end();
};


//function for show info total data in pagination
exports.pagination = function(totalData,page,totalPage,limit,value,res){
    const data = {
        status : 200,
        data : value,
        total : totalData,
        page : page,
        totalPage : totalPage,
        limit : limit
    };
    res.json(data);
    res.end();
}