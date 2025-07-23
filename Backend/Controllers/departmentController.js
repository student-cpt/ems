import Department from "../Modules/Department.js";
const addDepartment = async(req, res) => {
    try {
        const { dep_name, description } = req.body;

        const newDep = new Department({
            dep_name,
            description
        });

        await newDep.save();

        return res.status(200).json({ success: true, message: "Department added successfully" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: "Add department server error" });
    }
};

export { addDepartment };