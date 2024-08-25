import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../store';
import { TextField, Button, Box } from '@mui/material';

const AddWidgetForm = ({ categoryId }) => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newWidget = {
            id: Date.now(),
            name,
            text,
        };
        dispatch(addWidget({ categoryId, widget: newWidget }));
        setName('');
        setText('');
    };

    return (
        <Box mt={2}>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Widget Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    sx={{ mr: 2 }}
                />
                <TextField
                    label="Widget Text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    sx={{ mr: 2 }}
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Widget
                </Button>
            </form>
        </Box>
    );
};

export default AddWidgetForm;
