const passport=require('passport');
const JWTStrategy=require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;
const User=require('../models/userSchema');

let opts={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'codial',
}

passport.use(new JWTStrategy(opts,async function(jwtPayload,done){

    try {
        let user=await User.findById(jwtPayload._id);
        
        if(user){
            return done(null,user);
        }else{
            return done(null,false);
        }
    } catch (error) {
        console.log('error in finding user');
    }
}));

module.exports=passport;
