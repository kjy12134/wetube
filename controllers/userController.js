login, join, logout
// router 타고 들어와서 실제로 수행할 함수 로직 

export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout");
export const join = (req, res) => res.render("join");
export const users = (req, res) => res.send("users");
export const userDetail = (req, res) => res.send("userDetail");
export const editProfile = (req, res) => res.send("editProfile");
export const changePwd = (req, res) => res.send("changePwd");
