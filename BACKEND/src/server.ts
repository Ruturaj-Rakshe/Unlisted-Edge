import express from 'express';
import cors from 'cors';
import prisma from './prisma';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Create User Endpoint
app.post('/api/users/create', async (req, res) => {
    try {
        const {id, email, username, firstName, lastName, imageUrl} = req.body;

        const user = await prisma.user.create({
            data: {
                id,
                email,
                username,
                firstName,
                lastName,
                imageUrl
            }
        })

        res.status(200).json({success: true, user});
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({success: false, message: 'Failed to create user'});
    }

});

// Update User Endpoint
app.put('/api/users/update', async (req, res) => {
    try {
        const {id, email, username, firstName, lastName, imageUrl} = req.body;

        const user = await prisma.user.update({
            where: {id},
            data: {
                email,
                username,
                firstName,
                lastName,
                imageUrl
            }
        })
        res.status(200).json({success: true, user});

    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({success: false, message: 'Failed to update user'});
    }
});


app.delete('/api/users/delete', async (req, res) => {
    try {
        const {id} = req.body;

        const deletedUser = await prisma.user.delete({
            where: {id}
        })
        res.status(200).json({success: true, deletedUser});
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({success: false, message: 'Failed to delete user'});
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

