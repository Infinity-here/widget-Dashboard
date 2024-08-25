import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeWidget } from '../store';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';
import { Box, Typography, IconButton, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Dashboard = () => {
    const categories = useSelector(state => state.dashboard.categories);
    const dispatch = useDispatch();

    const handleRemoveWidget = (categoryId, widgetId) => {
        dispatch(removeWidget({ categoryId, widgetId }));
    };

    return (
        <Box>
            {categories.map(category => (
                <Box key={category.id} mb={4}>
                    <Typography variant="h5">{category.name}</Typography>
                    <Box mt={2}>
                        {category.widgets.map(widget => (
                            <Widget
                                key={widget.id}
                                widget={widget}
                                onRemove={() => handleRemoveWidget(category.id, widget.id)}
                            />
                        ))}
                    </Box>
                    <AddWidgetForm categoryId={category.id} />
                </Box>
            ))}
        </Box>
    );
};

export default Dashboard;
