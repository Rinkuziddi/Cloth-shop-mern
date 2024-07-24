const sidebar = require("../Models/sidebar");


const getSideBar = async (req, res) => {
    try {
        const sidebarList = await sidebar.find();
        return res.status(200).json({
            statusCode: 200,
            message: "Side Bar List Get Successfully",
            success: true,
            data: sidebarList,
        });
    }
    catch (err) {
        console.error(err);
        return res.status().json({
            message: "Internal server error",
            success: false,
        });
    }
};

module.exports =
    getSideBar
    ;