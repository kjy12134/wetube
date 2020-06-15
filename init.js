import app from "./app"; // export default
const PORT = 4000;
const handleListening = () => {
    console.log('listening on http://localhost:${PORT}');
}

app.listen(PORT, handleListening);