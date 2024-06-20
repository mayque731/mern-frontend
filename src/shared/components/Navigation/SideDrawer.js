import React from "react";
import './SideDrawer.css';
import ReactDOM from "react-dom";

const SiderDrawer = props => {
    const content = <aside className="sider-drawer">{props.children}</aside>;

    //return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SiderDrawer;