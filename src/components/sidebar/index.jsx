import { useEffect } from 'react';
import './index.css';
function Sidebar() {
    var sidebar;
    var closeBtn;
    var searchBtn;
    useEffect(()=>{
        sidebar = document.querySelector(".sidebar");
        closeBtn = document.querySelector("#btn");
        searchBtn = document.querySelector(".bx-search");
        closeBtn.addEventListener("click", ()=>{
            sidebar.classList.toggle("open");
            menuBtnChange();
        });
    
        searchBtn.addEventListener("click", ()=>{ 
            sidebar.classList.toggle("open");
            menuBtnChange();
        });
    },[])
    const menuBtnChange = () => {
        if(sidebar.classList.contains("open")){
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        }else {
            closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
        }
    }
    
    return (
        <div className="sidebar">
            <div className="logo-details">
            <i className='bx bx-store icon'></i>
                <div className="logo_name">Fake Store</div>
                <i className='bx bx-menu' id="btn" ></i>
            </div>
            <ul className="nav-list">
            <li>
                <i className='bx bx-search' ></i>
                <input type="text" placeholder="Search..." />
                <span className="tooltip">Search</span>
            </li>
            <li>
                <a href="#">
                <i className='bx bx-home'></i>
                <span className="links_name">Home</span>
                </a>
                <span className="tooltip">Home</span>
            </li>
            <li>
            <a href="#">
                <i className='bx bx-heart' ></i>
                <span className="links_name">Saved</span>
            </a>
            <span className="tooltip">Saved</span>
            </li>
            <li>
            <a href="#">
                <i className='bx bx-cart-alt' ></i>
                <span className="links_name">Orders</span>
            </a>
            <span className="tooltip">Orders</span>
            </li>
            <li>
            <a href="#">
                <i className='bx bx-user' ></i>
                <span className="links_name">User</span>
            </a>
            <span className="tooltip">User</span>
            </li>
            {/* <li>
            <a href="#">
                <i className='bx bx-chat' ></i>
                <span className="links_name">Messages</span>
            </a>
            <span className="tooltip">Messages</span>
            </li>
            <li>
            <a href="#">
                <i className='bx bx-pie-chart-alt-2' ></i>
                <span className="links_name">Analytics</span>
            </a>
            <span className="tooltip">Analytics</span>
            </li>
            <li>
            <a href="#">
                <i className='bx bx-folder' ></i>
                <span className="links_name">File Manager</span>
            </a>
            <span className="tooltip">Files</span>
            </li> */}
            <li>
            <a href="#">
                <i className='bx bx-cog' ></i>
                <span className="links_name">Setting</span>
            </a>
            <span className="tooltip">Setting</span>
            </li>
            <li className="profile">
                <div className="profile-details">
                {/* <img src="profile.jpg" alt="profileImg" /> */}
                <div className="name_job">
                    <div className="name">Dileep</div>
                    <div className="job"></div>
                </div>
                </div>
                <i className='bx bx-log-out' id="log_out" ></i>
            </li>
            </ul>
        </div>
    )
}
export default Sidebar