import { Button } from '@nextui-org/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();


    const handleLogin = () => {
        localStorage.setItem('user', 'user');
        navigate('/');
    }

    return (
        <div>
            <Button onPress={handleLogin}>Click me</Button>
        </div>
    )
}
