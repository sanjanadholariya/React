import logo from '../assets/logo.png'
import { GoSearch } from "react-icons/go";
import { LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineAddIcCall } from "react-icons/md";

import "./Header.css";

const Header = () => {
  return (
    <>

      <section className="searchbar ">
        <div className="container pt-3">

          <div className="row">
            <div className="col-2">
              <img src={logo} alt="" />
            </div>
            <div className="col-6 d-flex ms-0">
              <input type="text" placeholder="Search For Items..." ></input>

              <select className="form-select" aria-label="Default select example">
                <option selected>All Category</option>
                <option value="1">Mens</option>
                <option value="2">Womens</option>
                <option value="3">Electronics</option>
              </select>

              <button className='searchButton'>
                <GoSearch style={{ color: "white" }} />
              </button>

            </div>
            <div className="col-4 ">
              <div className='header_end d-flex align-items-center'>
                <div className="dropdown me-5">
                  <a className="nav-link  align-items-center " href="#" role="button">
                    <LuUserRound /> Account
                  </a>
                  <ul className="dropdown-menu dropdown-menu-width">
                    <li><a className="dropdown-item" href="#">Register</a></li>
                    <li><a className="dropdown-item" href="#">Checkout</a></li>
                    <li><a className="dropdown-item" href="#">Login</a></li>
                  </ul>
                </div>
                <a className="nav-link me-5 align-items-center" href="#" role="button" style={{ fontSize: "15px" }}>
                  <FaRegHeart /> Wishlist

                </a>
                <a className="nav-link  align-items-center" href="#" role="button">
                  <FiShoppingCart /> Cart
                </a>
              </div>

            </div>
          </div>
          <hr style={{ color: "grey" }} />

          <div className="row">
            <div className="col-2">
              <div className="dropdown-wrapper">
                <button className="bars">
                  <FaBarsStaggered/>
                </button>

                <div className="mega-menu row">
                  <div className="col-4">
                    <h6 style={{color:"#64b496"}}>Dairy</h6>
                    <ul>
                      <li><a href="#">Milk</a></li>
                      <li><a href="#">Ice Cream</a></li>
                      <li><a href="#">Cheese</a></li>
                      <li><a href="#">Frozen Custard</a></li>
                      <li><a href="#">Frozen Yogurt</a></li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <h6 style={{color:"#64b496"}}>Bakery</h6>
                    <ul>
                      <li><a href="#">Cake And Pastry</a></li>
                      <li><a href="#">Rusk Toast</a></li>
                      <li><a href="#">Bread & Buns</a></li>
                      <li><a href="#">Chocolate Brownie</a></li>
                      <li><a href="#">Cream Roll</a></li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <h6 style={{color:"#64b496"}}>Snacks</h6>
                    <ul>
                      <li><a href="#">Chips</a></li>
                      <li><a href="#">Cookies</a></li>
                      <li><a href="#">Popcorn</a></li>
                      <li><a href="#">Namkeen</a></li>
                      <li><a href="#">Samosa</a></li>
                    </ul>
                  </div>
                </div>
              </div>


            </div>
            <div className="col-8">
              <ul className='menu_list d-flex'>
                <li><a href="#">Home</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link  d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category <FaAngleDown style={{ fontSize: "10px", marginLeft: "5px" }} />
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Shop Left Sidebar</a></li>
                    <li><a className="dropdown-item" href="#">Shop Right Sidebar</a></li>
                    <li><a className="dropdown-item" href="#">Full Width</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link  d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Products <FaAngleDown style={{ fontSize: "10px", marginLeft: "5px" }} />
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">
                      product Left sidebar
                    </a></li>
                    <li><a className="dropdown-item" href="#">product Right sidebar
                    </a></li>
                    <li><a className="dropdown-item" href="#">Product Full Width</a></li>
                  </ul>
                </li><li className="nav-item dropdown">
                  <a className="nav-link  d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages <FaAngleDown style={{ fontSize: "10px", marginLeft: "5px" }} />
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">About Us</a></li>
                    <li><a className="dropdown-item" href="#">Contact Us</a></li>
                    <li><a className="dropdown-item" href="#">Cart</a></li>
                    <li><a className="dropdown-item" href="#">Checkout</a></li>
                    <li><a className="dropdown-item" href="#">Track Order</a></li>
                    <li><a className="dropdown-item" href="#">Wishlist</a></li>
                    <li><a className="dropdown-item" href="#">Faq</a></li>
                    <li><a className="dropdown-item" href="#">Login</a></li>
                    <li><a className="dropdown-item" href="#">Register</a></li>
                    <li><a className="dropdown-item" href="#">Policy</a></li>
                  </ul>
                </li><li className="nav-item dropdown">
                  <a className="nav-link  d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Blog <FaAngleDown style={{ fontSize: "10px", marginLeft: "5px" }} />
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Left Sidebar</a></li>
                    <li><a className="dropdown-item" href="#">Right Sidebar</a></li>
                    <li><a className="dropdown-item" href="#">Full Width</a></li>
                    <li><a className="dropdown-item" href="#">Detail Left Sidebar</a></li>
                    <li><a className="dropdown-item" href="#">Detail Right Sidebar</a></li>
                    <li><a className="dropdown-item" href="#">Detail Full width</a></li>

                  </ul>
                </li><li className="nav-item dropdown">
                  <a className="nav-link  d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Elements <FaAngleDown style={{ fontSize: "10px", marginLeft: "5px" }} />
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Products</a></li>
                    <li><a className="dropdown-item" href="#">Typography</a></li>
                    <li><a className="dropdown-item" href="#">Buttons</a></li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="col-2 call">
              <MdOutlineAddIcCall />  +123 ( 456 ) ( 7890 )
            </div>
          </div>



        </div>


      </section>
















      {/* <div className="searchBar p-3 align-items-center">
        <Container>
          <Row>
            <Col>
              <img
                className="logo"
                src={logo}
                alt=""
                width={115}
                height={35}
              />
            </Col>
            <Col xs={6} >
              <div className="search d-flex">
                <input type="text" placeholder="Search For Items..." ></input>
                <div className="dropdown">
                  <Dropdown>
                  <Dropdown.Toggle  id="dropdown-basic">
                    
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown_menu">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
              </div>
            </Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div> */}
    </>
  );
};

export default Header;
