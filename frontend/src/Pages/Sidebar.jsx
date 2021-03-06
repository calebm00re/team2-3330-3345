import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../Styles/Sidebar.css'
import { Link } from 'react-router-dom';
import { UserRepository } from '../api/userRepository';

const userRepository = new UserRepository();
const user = userRepository.currentUser();

export const EmojiIcon = (props) => <p className="emojiIcon"> { props.emoji } </p>

export const Sidebar = (props) =>
    <div className="sidebar">
        <ProSidebar>
        <Menu iconShape="circle">
            <MenuItem icon={<EmojiIcon emoji="🏠"/>}>
                Home
                <Link to="/home" />
                {
                    props.selectedTab === 'home' ?
                    <div className="sidebar-selectedtab-indicator"></div>
                    :
                    <></>
                }
            </MenuItem>
            <MenuItem icon={<EmojiIcon emoji="🔍"/>}>
                Browse
                <Link to="/browse" />
                {
                    props.selectedTab === 'browse' ?
                    <div className="sidebar-selectedtab-indicator"></div>
                    :
                    <></>
                }
            </MenuItem>
            <MenuItem icon={<EmojiIcon emoji="🤠"/>}>
                Post
                <Link to="/post" />
                {
                    props.selectedTab === 'post' ?
                    <div className="sidebar-selectedtab-indicator"></div>
                    :
                    <></>
                }
            </MenuItem>
            <MenuItem icon={<EmojiIcon emoji="🤸"/>}>
                Profile
                <Link to={"/profile/" + user.userID} />
                {
                    props.selectedTab === 'profile' ?
                    <div className="sidebar-selectedtab-indicator"></div>
                    :
                    <></>
                }
            </MenuItem>
            <div className="sidebar-spacer" />
            <MenuItem icon={<EmojiIcon emoji="🐢"/>}>
                Logout
                <Link to="/" />
            </MenuItem>
        </Menu>
        </ProSidebar>
    </div>
