login, join, logout
// router 타고 들어와서 실제로 수행할 함수 로직 

export const login = (req, res) => res.render("login", {pageTitle : 'login'});
export const logout = (req, res) => res.render("logout", {pageTitle : 'logout'});
export const join = (req, res) => res.render("join", {pageTitle : 'join'});
export const users = (req, res) => res.render("users", {pageTitle : 'users'});
export const userDetail = (req, res) => res.render("userDetail", {pageTitle : 'userDetail'});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle : 'editProfile'});
export const changePwd = (req, res) => res.render("changePwd", {pageTitle : 'changePwd'});
