const userModel = require("../Models/users");
const jwt = require("jsonwebtoken")

const registration = async (req, res) => {
    try {
        const { name, email, mobileNumber, password } = req.body;

        const user = await userModel.findOne({ email });
        if (user) {
            return res.json({
                statusCode: 401,
                message: "User already exists for this email",
                success: false,
            });
        }

        const newUser = new userModel({ name, email, mobileNumber, password });
        await newUser.save();

        return res.json({
            message: "User created successfully",
            statusCode: 200,
            success: true,
            data: newUser,
        });
    } catch (err) {
        console.error(err);
        return res.json({
            message: "Internal server error",
            success: false,
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(200).json({
                statusCode: 401,
                message: "User not found",
                success: false,
            });
        }
        if (user.password !== password) {
            return res.status(200).json({
                statusCode: 401,
                message: "Invalid password",
                success: false,
            });
        }
        const token = jwt.sign({ email: user.email, id: user._id }, 'SECRET-123', { expiresIn: "1d" });
        return res.status(200).json({
            statusCode: 200,
            message: "Login successful",
            success: true,
            data: {
                token: token,
                user: user
            },
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

module.exports = {
    registration,
    login
};
