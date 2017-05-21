var mongoose = require('mongoose');

var dogSchema = new mongoose.Schema({
	name:{type:String, required:true},
	age:{type:Number, required:true},
	picture:{type:String, required:true},
	gender:{type:String, required:true},
	breed:{type:String, required:true},
	
	dateCreated:{type:Date, required:true},
	dateLastEdited:{type:Date, required:true, default:Date.now},
});

mongoose.model('Dog', dogSchema);

var userSchema = new mongoose.Schema({
	email:{type:String, required:true},
	name:{type:String, required:true},
	dateOfBirth:{type:String, required:true},
	gender:{type:String, required:true},
	profilePicture:{type:String, required:true},
	phoneNumber:{type:String, required:true},
	suburb:{type:String, required:true},
	
	dog:{type:[dogSchema], required:true},
	
	dateCreated:{type:Date, required:true},
	dateLastEdited:{type:Date, required:true. default:Date.now},
	isDeleted:{type:Boolean, required:true, default:False}
});
	
mongoose.model('User', userSchema);

var matchSchema = new mongoose.Schema({
	response:{type:String, required:true},
	user:{type:[userSchema], required:true},
	targetUser:{type:[userSchema], required:true},
});

mongoose.model('Matches', matchSchema);

var messageSchema = new mongoose.Schema({
	message:{type:String, required:true},
	userFrom:{type:[userSchema], required:true},
	userTo:{type:[userSchema], required:true},
	read:{type:Boolean, required:true, default:false},
});

mongoose.model('Messages', messageSchema);

var notificationSchema = new mongoose.Schema({
	target:{type:String, required:true},
	userTarget:{type:[userSchema], required:true},
	read:{type:Boolean, required:true; default;false},
});

mongoose.model('Notifications', notificationSchema);
		
		
		