import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../Styles/Sidebar.css'
import { Link } from 'react-router-dom';

export const EmojiIcon = (props) => <p className="emojiIcon"> { props.emoji } </p>

export const Sidebar = (props) =>
    <div className="sidebar">
        <ProSidebar>
        <Menu iconShape="circle">
            <MenuItem icon={<EmojiIcon emoji="🏠"/>}>
                Home
                <Link to="/home" />
            </MenuItem>
            <MenuItem icon={<EmojiIcon emoji="🔍"/>}>
                Browse
                <Link to="/browse" />
            </MenuItem>
            <MenuItem icon={<EmojiIcon emoji="🤸"/>}>
                Profile
                <Link to="/profile" />
            </MenuItem>
            {/* <SubMenu title="Other pages" icon={<EmojiIcon emoji="😵‍💫"/>}>
                <MenuItem>
                    Landing page
                    <Link to="/" />
                </MenuItem>
                <MenuItem>
                    Login
                    <Link to="/login" />
                </MenuItem>
                <MenuItem>
                    Signup
                    <Link to="/signup" />
                </MenuItem>
            </SubMenu> */}
            <div className="sidebar-spacer" />
            <MenuItem icon={<EmojiIcon emoji="🐢"/>}>
                Logout
                <Link to="/" />
            </MenuItem>
        </Menu>
        </ProSidebar>
    </div>
