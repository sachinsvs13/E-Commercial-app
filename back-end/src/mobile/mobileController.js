const phone = require("./mobileModel");

const postPhone = async (req,res) => {
    try {
        const newPhone = await phone({...req.body});
        await newPhone.save();
        res.status(200).send({ message: 'Phone series added successfully', phone: newPhone });
    } catch (error) {
        console.error("Error Creating phone :",error);
        res.status(500).send({ message: 'Failed to add phone series'});
    }
}

const getAllPhone = async (req, res) => {
    try {
        const getPhone = await phone.find().sort({createdAt : -1});
        res.status(200).send({ message: 'Phone series fetched successfully', phone: getPhone });
        
    } catch (error) {
        console.error("Error getting phone :",error);
        res.status(500).send({ message: 'Failed to get phone series'});
    }
}

const getPhone = async (req, res) => {
    try {
        const {id} = req.params;
        const getPhone = await phone.findById(id);
        if (!getPhone) {
            res.status(404).send({ message: 'Phone series not found' });
        }
        res.status(200).send({ message: 'Phone series fetched successfully', phone: getPhone });
        
    } catch (error) {
        console.error("Error fetching phone :",error);
        res.status(500).send({ message: 'Failed to fetch a phone series'});
    }
}

const updatePhone = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedPhone = await phone.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedPhone) {
            return res.status(404).send({ message: 'Phone series not found' });
        }
        res.status(200).send({ message: 'Phone series updated successfully', phone: updatedPhone });
    }
    catch (error) {
        console.error("Error updating phone series:", error);
        res.status(500).send({ message: 'Failed to update phone series' });
    }
}

const deletePhone = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedPhone = await phone.findByIdAndDelete(id);
        if (!deletedPhone) {
            return res.status(404).send({ message: 'Phone series not found' });
        }
        res.status(200).send({ message: 'Phone series deleted successfully', phone: deletedPhone });
    }
    catch (error) {
        console.error("Error deleting phone series:", error);
        res.status(500).send({ message: 'Failed to delete phone series' });
    }
}

module.exports = {
    postPhone,
    getAllPhone,
    getPhone,
    updatePhone,
    deletePhone
    
}