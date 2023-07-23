
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import ManagerUsers from '../../controllers/user.controller.js'

const MUS = new ManagerUsers

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

export const strategyJWT = new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
        const user = await MUS.findElementById(payload._id)
        console.log(user)
        if (!user) {
            return done(null, false)
        }

        return done(null, user)

    } catch (error) {
        return done(error, false)
    }
})
