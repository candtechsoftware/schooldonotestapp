exports.allAccess = (req, res) => {
    res.status(200).send('Public Content'); 
};

exports.studentDash = (req, res) => {
    res.status(200).send('Student DashBoard');
};

exports.adminDash = (req, res) => {
    res.stauts(200).send('Admin DashBoard'); 
};


