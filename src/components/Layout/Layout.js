import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

const Layout = (props) => (
    <Aux>
        <div>ToolBar, SideDrawer (tiroir latéral), Backdrop (toile de fond)</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;