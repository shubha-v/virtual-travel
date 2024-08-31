import './Filter.css';
import React, { useState } from 'react';
import { Box, Typography, FormControlLabel, Checkbox, Card, CardContent, CardMedia, Grid, Collapse, IconButton, Radio, RadioGroup } from '@mui/material';
import { MdExpandMore, MdExpandLess } from "react-icons/md";

function Filters() {
    const [filters, setFilters] = useState({
        budget: '',
        days: [],
        activities: {
            hiking: false,
            sightseeing: false,
            shopping: false,
        },
    });

    const [expandBudget, setExpandBudget] = useState(false);
    const [expandDays, setExpandDays] = useState(false);
    const [expandActivities, setExpandActivities] = useState(false);

    const handleBudgetChange = (event) => {
        setFilters({ ...filters, budget: event.target.value });
    };

    const handleDaysChange = (event) => {
        const { value, checked } = event.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            days: checked
                ? [...prevFilters.days, value]
                : prevFilters.days.filter((day) => day !== value),
        }));
    };

    const handleActivityChange = (event) => {
        setFilters({
            ...filters,
            activities: {
                ...filters.activities,
                [event.target.name]: event.target.checked,
            },
        });
    };

    const handleResetFilters = () => {
        setFilters({
            budget: '',
            days: [],
            activities: {
                hiking: false,
                sightseeing: false,
                shopping: false,
            },
        });
    };

    const toggleBudget = () => {
        setExpandBudget(!expandBudget);
    };

    const toggleDays = () => {
        setExpandDays(!expandDays);
    };

    const toggleActivities = () => {
        setExpandActivities(!expandActivities);
    };

    const cardsData = [
        { id: 1, title: 'Place 1', image: 'https://via.placeholder.com/150', budget: 10000, duration: 3, activities: ['hiking', 'sightseeing'] },
        { id: 2, title: 'Place 2', image: 'https://via.placeholder.com/150', budget: 20000, duration: 5, activities: ['shopping'] },
        { id: 3, title: 'Place 3', image: 'https://via.placeholder.com/150', budget: 30000, duration: 2, activities: ['hiking'] },
        { id: 4, title: 'Place 4', image: 'https://via.placeholder.com/150', budget: 40000, duration: 7, activities: ['sightseeing'] },
        { id: 5, title: 'Place 5', image: 'https://via.placeholder.com/150', budget: 50000, duration: 1, activities: ['shopping'] },
        { id: 6, title: 'Place 6', image: 'https://via.placeholder.com/150', budget: 50000, duration: 4, activities: ['hiking', 'sightseeing'] },
    ];

    const filteredCards = cardsData.filter((card) => {
        const matchesBudget = filters.budget ? card.budget === parseInt(filters.budget) : true;
        const matchesDays = filters.days.length > 0
            ? filters.days.some((range) => {
                const [min, max] = range.split('-').map(Number);
                return card.duration >= min && card.duration <= max;
            })
            : true;
        const matchesActivities = Object.keys(filters.activities).every((activity) =>
            filters.activities[activity] ? card.activities.includes(activity) : true
        );
        return matchesBudget && matchesDays && matchesActivities;
    });

    return (
        <Box className="filters-container">
            <Box className="filters">
                <Typography variant="h5" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: '100' }}>Filters</Typography>
                <Typography variant="h5" className="clear-filters" onClick={handleResetFilters} underline="always" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: '100' }}>Clear</Typography>
                <hr /><br />

                <Box className="filter-section">
                    <Box className="filter-header">
                        <Typography gutterBottom>Budget Per Person (in Rs.)</Typography>
                        <IconButton onClick={toggleBudget}>
                            {expandBudget ? <MdExpandLess /> : <MdExpandMore />}
                        </IconButton>
                    </Box>
                    <Collapse in={expandBudget}>
                        <RadioGroup value={filters.budget} onChange={handleBudgetChange}>
                            {[10000, 20000, 30000, 40000, 50000].map((price) => (
                                <FormControlLabel key={price} value={price.toString()} control={<Radio />} label={`₹${price}`} />
                            ))}
                        </RadioGroup>
                    </Collapse>
                </Box>

                <Box className="filter-section">
                    <Box className="filter-header">
                        <Typography gutterBottom>No. of Days</Typography>
                        <IconButton onClick={toggleDays}>
                            {expandDays ? <MdExpandLess /> : <MdExpandMore />}
                        </IconButton>
                    </Box>
                    <Collapse in={expandDays}>
                        <Box className="filter-options">
                            {['1-3', '4-6', '7-9', '10-15'].map((range) => (
                                <FormControlLabel
                                    key={range}
                                    control={<Checkbox checked={filters.days.includes(range)} onChange={handleDaysChange} value={range} />}
                                    label={`${range} Days`}
                                />
                            ))}
                        </Box>
                    </Collapse>
                </Box>

                <Box className="filter-section">
                    <Box className="filter-header">
                        <Typography gutterBottom>Activities</Typography>
                        <IconButton onClick={toggleActivities}>
                            {expandActivities ? <MdExpandLess /> : <MdExpandMore />}
                        </IconButton>
                    </Box>
                    <Collapse in={expandActivities}>
                        <Box className="filter-options">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={filters.activities.hiking}
                                        onChange={handleActivityChange}
                                        name="hiking"
                                    />
                                }
                                label="Hiking"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={filters.activities.sightseeing}
                                        onChange={handleActivityChange}
                                        name="sightseeing"
                                    />
                                }
                                label="Sightseeing"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={filters.activities.shopping}
                                        onChange={handleActivityChange}
                                        name="shopping"
                                    />
                                }
                                label="Shopping"
                            />
                        </Box>
                    </Collapse>
                </Box>
            </Box>

            <Box className="cards">
                <Grid container spacing={2}>
                    {filteredCards.map((card) => (
                        <Grid item xs={12} sm={6} md={3} key={card.id}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="80"
                                    image={card.image}
                                    alt={card.title}
                                />
                                <CardContent>
                                    <Typography variant="h6">{card.title}</Typography>
                                    <Typography variant="body2">Budget: ₹{card.budget}</Typography>
                                    <Typography variant="body2">Duration: {card.duration} Days</Typography>
                                    <Typography variant="body2">Activities: {card.activities.join(', ')}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default Filters;
