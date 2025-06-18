import express from "express";
const PORT = process.env.SERVER_PORT || 5000;

const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});