
const Book = require('./Book.model');

exports.create = (req, res) => {
 
    // Create a Book
    const book = new Book({
        title: req.body.title, 
        author: req.body.author,
        category: req.body.category
    });

    // Save Note in the database
    book.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findall = (req, res) => {
    Book.find()
    .then(books => {
        res.status(200).json({
            error: false,
            message: 'success',
            result: books.length,
            datais: books
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving books."
        });
    });
};