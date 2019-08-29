import React,{useState} from 'react';

import '../css/Login.css';

export default function Login({history}){
    const[agencia,setAgencia] = useState('');
    const[conta,setConta] = useState('');

    return (
            <div className="login-container">
                <form>
                    <input
                        placeholder = "Agência"
                        value = {agencia}
                        onChange={e => setAgencia(e.target.value)}
                    />
                    <input
                        placeholder = "Conta"
                        value = {conta}
                        onChange={e => setConta(e.target.value)}
                    />
                    <button type="submit">Entrar</button>
                </form>
            </div>
    );
}
