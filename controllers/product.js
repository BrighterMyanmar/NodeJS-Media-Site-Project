let create = (req, res) => {
    if (Array.isArray(req.files.files)) {
        for (let file of req.files.files) {
            let date = new Date();
            filename = date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds() + "_" + date.getMinutes() + "_" + file.name;
            file.mv('./uploads/' + filename);
        }
    }else{
        let date = new Date();
        filename = date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds() + "_" + date.getMinutes() + "_" + req.files.files.name;
        req.files.files.mv('./uploads/' + filename);
    }


    res.send(req.body);
}

module.exports = {
    create
}