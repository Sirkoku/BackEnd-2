export const loginSuccess = (req, res) => {
    res.json({ status: "success", user: req.user });
};
