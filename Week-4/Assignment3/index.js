import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import { getUsers, getUser, createUser, signupCheck, signinCheck} from './database.js'

const app = express()
const port = 3060
app.set('view engine','pug')
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.get("/homepage",  (req,res) => {
    res.render("home")
});

app.post("/homepage", async (req,res) => {
    res.cookie('email', req.body.email);
    res.cookie('password', req.body.password);
    res.cookie('signinEmail', req.body.signinEmail);
    res.cookie('signinPassword', req.body.signinPassword);
    const mail = req.body.email;
    const pass = req.body.password;
    const signinMail = req.body.signinEmail;
    const signinPass = req.body.signinPassword;
    const signup = await signupCheck(mail)
    const signin = await signinCheck(signinMail,signinPass)
    if (signin > 0) {   
        res.redirect("/welcome");
    } else if(signup === 0 && !(mail === undefined || mail === null || pass === undefined || pass === null)){  
        createUser(mail, pass);
        res.redirect("/welcome");
    } else {
        res.send('oh no');
    }
})

app.get("/welcome", (req,res) => {
    res.render("welcome")
});

app.get("/",  async (req,res) => {
    const notes = await getUsers()
    res.send(notes)
});

app.post("/", async (req,res) => {
    const {email,password} = req.body
    const note = await createUser(email,password)
    res.send(note)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});