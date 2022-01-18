import { Button, Container, InputBase, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';

export default function Login() {
  const ariaLabel = { 'aria-label': 'description' };

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>();
  const somePassword = {
    login: 'admin',
    password: 'admin',
  };

  let from = location.state?.from?.pathname || '/';

  let navigate = useNavigate();
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className="border-black border-2"
    >
      <Stack style={{ width: '50%' }}>
        <span className="text-4xl font-bold text-center mb-4">ShareTaxi</span>
        <TextField
          value={login}
          onInput={(x) => {
            setLogin(x.target.value);
            /*                 setFilteredList(
                  allTrips?.filter((item) =>
                    item.title.toLowerCase().includes(x.target.value.toLowerCase())
                  ) ?? filteredList
                ); */
          }}
          label="Логин"
          style={{ marginBottom: '24px' }}
          style={{ marginBottom: '24px' }}
          /*         placeholder="Поиск по комментарию..."
        className="text-black text-lg ml-4" */
        />
        <TextField
          value={password}
          onInput={(x) => {
            setPassword(x.target.value);
            /*                 setFilteredList(
                  allTrips?.filter((item) =>
                    item.title.toLowerCase().includes(x.target.value.toLowerCase())
                  ) ?? filteredList
                ); */
          }}
          placeholder="Поиск по комментарию..."
          label="Логин"
          type="password"
          style={{ marginBottom: '24px' }}
        />
        <button
          className="text-center py-2 rounded-xl text-white text-xl font-bold"
          style={{ background: '#6F6CD9' }}
          onClick={() => {
            if (login == 'admin' && password == 'admin') {
              navigate('/main');
            }
          }}
        >
          Войти
        </button>
      </Stack>
    </div>
  );
}
