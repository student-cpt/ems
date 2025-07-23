// ✅ Use PascalCase for model names like 'User'
import User from './Modules/user.js';
import bcrypt from 'bcryptjs';
import connectToDatabase from './DB/db.js';

const userRegister = async () => {
    try {
        // ✅ Await DB connection to ensure it's ready
        await connectToDatabase();

        // ✅ Hash the password
        const hashPassword = await bcrypt.hash("admin123", 10);

        // ✅ Create a new User object 
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com", 
            password: hashPassword,
            role: "admin",
        });

        // ✅ Save to database
        await newUser.save();

        console.log("Admin user created successfully.");
    } catch (error) {
        console.error("Error creating admin user:", error);
    }
};

userRegister();
