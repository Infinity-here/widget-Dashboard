import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Widget = ({ widget, onRemove }) => {
    return (
        <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6">
                    {widget.name}
                    <IconButton
                        aria-label="remove"
                        size="small"
                        sx={{ float: 'right' }}
                        onClick={onRemove}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Typography>
                <Typography variant="body2">{widget.text}</Typography>
            </CardContent>
        </Card>
    );
};

export default Widget;
