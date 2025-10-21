import express from 'express';

const app = express();

const PORT = 3004;

app.use(express.static('public'));

app.use(express.urlencoded({ extended:true }));

const forms = [];

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/admin', (req, res) => {
    res.send(forms);
    // res.sendFile(`${import.meta.dirname}/views/admin.html`);
});


app.post('/submit-form', (req, res) => {
    const form = {
        fname: req.body.fname,
        lname: req.body.lname,
        date: req.body.date,
        time: req.body.time
    }
    forms.push(form);
    console.log(forms);

    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});