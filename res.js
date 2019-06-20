'use strict'

exports.ok = function(values, res) {
    var data = {
        'status': 200,
        'values': values
    };
    res.json(data);
    res.end();
};

//function for show info total data in pagination
exports.ok2 = function(totalData,page,totalPage,limit,value,res){
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