import React, { useEffect } from 'react';
import { Paper, Box } from '@material-ui/core'

export default function RandomFact({ facts, fetchFact }) {
    useEffect(() => {
        fetchFact()
    }, [fetchFact])
    return (
        <Paper elevation={3}>
            <Box m={2} p={2}>
             {facts && facts.map(fact => fact)}
            </Box>
        </Paper>
    )
}
