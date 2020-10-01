import React from 'react';
import { AppBar, Toolbar, Typography, Link, Box, Grid } from '@material-ui/core/';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

export default function Navigation() {
    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Typography variant="h5">Test task</Typography>
                    <Box display="flex">
                        <Box mr={2}><Link activeClassName='is-nav-link-active' component={NavLink} color='inherit' variant="h6" to='/users'>Users</Link></Box>
                        <Box mr={2}><Link activeClassName='is-nav-link-active' component={NavLink} color='inherit' variant="h6" to='/register'>Register user</Link></Box>
                        <Box><Link activeClassName='is-nav-link-active' component={NavLink} color='inherit' variant="h6" to='/about'>About</Link></Box>
                    </Box>
                </Grid>
            </Toolbar>
        </AppBar>
        </>
    )
}
