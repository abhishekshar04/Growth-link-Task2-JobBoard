import Button from "@/Ui/Button";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Logging in with:", email, password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen font-overpass bg-[#ECF2F0]">
            <div className="w-full max-w-md flex flex-col justify-between bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div>
                    <Button text="Login" onClick={handleLogin} textColor="white" bgColor="bg-[#007456]"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
