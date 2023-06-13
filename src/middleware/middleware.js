/* export const verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({ message: "No token provided" });
    jwt.verify(token, config.SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Unauthorized" });
        req.userId = decoded.id;
        next();
    });
}; */

 const verificar = (req, res, next) => {
    let headers = req.headers
    console.log(headers)
}

export default verificar;