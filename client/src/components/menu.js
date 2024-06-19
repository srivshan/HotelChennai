import React from 'react';
import './Menu.css'; // Import your CSS file

const Menu = () => {
  return (
    <div className='bg-white'>
    <div className="container">
      <h1 className="Menu_head">Explore Our Menu</h1>
      <div className="menu">
        <div>
          <section id="appetizers">
            <h2>Appetizers</h2>
            <div className="menu-item"> 
                <h3>Bruschetta</h3>
                <p>Tomatoes, garlic, basil, and mozzarella on grilled bread.</p>
            </div>
            <div className="menu-item"> 
                <h3>Spinach Artichoke Dip</h3>
                <p>Creamy spinach and artichoke dip served with tortilla chips.</p>
            </div>
          </section>

          <section id="main-courses">
            <h2>Main Courses</h2>
            <div className="menu-item"> 
                <h3>Grilled Salmon</h3>
                <p>Fresh salmon grilled to perfection, served with lemon butter sauce.</p>
            </div>
            <div className="menu-item"> 
                <h3>Chicken Alfredo</h3>
                <p>Grilled chicken breast served over fettuccine with Alfredo sauce.</p>
            </div>
          </section>
        </div>
        <div>
          <section id="desserts">
            <h2>Desserts</h2>
            <div className="menu-item"> 
                <h3>Chocolate Lava Cake</h3>
                <p>Warm chocolate cake with a gooey molten center, served with vanilla ice cream.</p>
            </div>
            <div className="menu-item"> 
                <h3>Classic Cheesecake</h3>
                <p>New York-style cheesecake topped with your choice of fruit compote.</p>
            </div>
          </section>

          <section id="drinks">
            <h2>Drinks</h2>
            <div className="menu-item"> 
                <h3>House Blend Coffee</h3>
                <p>Our special blend of freshly brewed coffee.</p>
            </div>
            <div className="menu-item"> 
                <h3>Fruit Punch</h3>
                <p>Refreshing fruit punch with a mix of tropical flavors.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Menu;
