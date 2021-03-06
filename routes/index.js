var express = require('express');
var passport = require('passport');
var router = express.Router();

var multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

var ctrlUnAuth = require('../controllers/unauth');
var ctrlAuth = require('../controllers/auth');

/* GET home page. */
router.get('/', ctrlUnAuth.home);
router.post('/login', passport.authenticate('local'), ctrlUnAuth.login);

/* GET logout */
router.get('/logout', ctrlAuth.logout);

/* GET registration page. */
router.get('/register', ctrlUnAuth.register);
router.post('/register', upload.single('profile_picture'), ctrlUnAuth.registerPost);

/* GET dog registration page. */
router.get('/register-dog', ctrlUnAuth.registerDog);
router.post('/register-dog', upload.single('profile_picture') ,ctrlUnAuth.registerDogPost);

/* GET discover page */
router.get('/discover', ctrlAuth.discover);
router.post('/discover', ctrlAuth.discoverPost);


/* GET matches page */
router.get('/matches', ctrlAuth.matches);


/* GET messages page */
router.get('/messages', ctrlAuth.messages);
router.post('/messages', ctrlAuth.messagesPost);

/* GET profile page */
router.post('/profile', upload.single('dog_picture'), ctrlAuth.proflePost);
router.get('/profile', ctrlAuth.profile);

/* Preferences Page */
router.get('/preferences', ctrlAuth.preferences);
router.post('/preferences', ctrlAuth.preferencesPost);

/* Welcome */
router.get('/welcome', ctrlUnAuth.welcome);


/* About */
router.get('/about', ctrlAuth.about);
router.get('/test-validation', ctrlAuth.test_validation);
router.get('/design-architecture', ctrlAuth.design_architecture);
router.get('/authors', ctrlAuth.authors);
router.get('/matching-algorithm', ctrlAuth.matching_algorithm);

/* Instructions */
router.get('/instructions-register', ctrlUnAuth.instructions);
router.get('/instructions', ctrlAuth.instructions);

module.exports = router;
