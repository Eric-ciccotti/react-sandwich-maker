import React from 'react';
import Aux from '../../hoc/Auxiliary';

const Layout = (props) => (
    <Aux>
        <div>ToolBar, SideDrawer (tiroir latéral), Backdrop (toile de fond)</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default Layout;