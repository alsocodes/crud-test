const db = require("../../models/index");
const User = db.user;
const Op = db.Sequelize.Op;
const { password_hash, password_verify } = require('../../helper/index')
const jwt = require('../../middleware/index')

// Membuat user baru
exports.create = async (req, res) => {
    const password = await password_hash(req.body.password)
    const user = {
        name: req.body.name,
        job_title: req.body.job_title,
        age: req.body.age,
        location: req.body.location,
        description: req.body.description,
        email: req.body.email,
        password: password
    };


    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                status: false,
                message: err.message || "Error"
            });
        });
};

// login
exports.login = async (req, res) => {
    // let test = await password_verify(req.body.password, 'c770185b89c542af:ff62fae57d2d443c82114a31053ce019907b80ac5f56931832ae10f9ee0b1b60e5bfbe2ea5b16635dbddd4cefd4befe9c8461bc84e4cb5e90725878d2414827d')
    // res.json({ test: test })
    // const project = await Project.findOne({ where: { title: 'My Title' } });
    User.findOne({ where: { email: req.body.email } })
        .then(async data => {
            if (!data) {
                res.send({
                    status: false,
                    message: 'Email tidak ditemukan'
                })
            } else {
                let verify = await password_verify(req.body.password, data.password)
                if (verify) {
                    res.send({
                        status: true,
                        message: 'Login berhasil',
                        token: jwt.generateAccessToken({ email: data.email, id: data.id, name: data.name }, 1111200)
                    })
                } else {
                    res.send({
                        status: false,
                        message: 'Password tidak sesuai',
                    })
                }
            }

        })
        .catch(err => {
            res.status(500).send({
                status: false,
                message: err.message || "Error"
            });
        })
}

// Read semua user
exports.findAll = (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                status: false,
                message: err.message || "Error"
            });
        });

};

// Read satu user by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                status: false,
                message: "error id=" + id
            });
        });
};

// Update user data
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    status: true,
                    message: "User berhasil di update"
                });
            } else {
                res.send({
                    status: false,
                    message: `Gagal mengupdate id =${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                status: false,
                message: "Gagal id=" + id
            });
        });
};

// Hapus user
exports.delete = (req, res) => {

    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    status: true,
                    message: "User berhasil dihapus!"
                });
            } else {
                res.send({
                    status: false,
                    message: `Gagal menghapus user dengan id=${id}. `
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                status: false,
                message: "Gagal id=" + id
            });
        });
};