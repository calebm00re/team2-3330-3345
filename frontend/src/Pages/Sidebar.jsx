import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
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
            {/* <SubMenu title="Your events" icon={<EmojiIcon emoji="🗓️"/>}>
                {
                    [1,2,3,4].map((x,i) => <>
                        <MenuItem key={i}>
                            Event {x}
                            <Link to={ "/events/" + x} />
                        </MenuItem>
                    </>)
                }
            </SubMenu> */}
            <MenuItem icon={<EmojiIcon emoji="🤸"/>}>
                Profile
                <Link to="/profile" />
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
