import jwt from 'jsonwebtoken'
import User from '../Modules/user.js'

const verifyUser = async(req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        console.log("Auth Header:", authHeader);

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, error: "Token not provided" });
        }

        const token = authHeader.split(' ')[1];
        console.log("Extracted Token:", token);

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log("Decoded Token:", decoded);

        const user = await User.findById(decoded._id).select('-password');

        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }

        req.user = user;
        next();

    } catch (error) {
        console.error("verifyUser error:", error.message);
        return res.status(401).json({ success: false, error: "Invalid or expired token" });
    }
};

// const verifyUser = async(req, res, next) => {
//     try {
//         const authHeader = req.headers.authorization;

//         if (!authHeader || !authHeader.startsWith("Bearer ")) {
//             return res.status(401).json({ success: false, error: "Token not provided" });
//         }

//         const token = authHeader.split(' ')[1];

//         const decoded = jwt.verify(token, process.env.JWT_KEY);

//         const user = await User.findById(decoded._id).select('-password');

//         if (!user) {
//             return res.status(404).json({ success: false, error: "User not found" });
//         }

//         req.user = user;
//         console.log("User verified:", req.user); // ✅ Debugging
//         next();

//     } catch (error) {
//         console.error("verifyUser error:", error.message); // ✅ Debugging
//         return res.status(401).json({ success: false, error: "Invalid or expired token" });
//     }
// };

export default verifyUser;