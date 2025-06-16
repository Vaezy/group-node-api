app.delete("/user/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex((user) => user.id === userId);
    if (index !== -1) {
        users.splice(index, 1);
        res.status(200).send(`User with ID ${userId} deleted`);
    } else {
        res.status(404).send(`User not found`);
    }
});
