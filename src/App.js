/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

const App = () => {
    const count = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default App;
*/


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import { Button, Typography, Container } from '@mui/material';  // MUI components

const App = () => {
    const count = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Count: {count}
            </Typography>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => dispatch(increment())}
                style={{ marginRight: '10px' }}
            >
                Increment
            </Button>
            <Button 
                variant="text" 
                color="secondary" 
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </Button>
        </Container>
    );
};

export default App;




