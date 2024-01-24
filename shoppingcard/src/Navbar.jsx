import React from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
function Nav({navDetails}) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a
            class="navbar-brand d-flex align-items-center"
            href="https://www.bmw.in/en/all-models.html?tl=grp-wdpl-bcom-mix-mn-.-nscf-.-.-"
            target="_blank"
          >
            <h2 className="d-inline mb-0 text-light">
              NIKE{" "}
              <img
                src="https://iconscout.com/icons/bmw"
                alt="Shop-Logo"
                className="img-fluid Shop-Logo"
              />
            </h2>
          </a>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navItems"
            aria-controls="navItems"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navItems">
            <ul class="navbar-nav me-auto my-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="ShopItems"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="ShopItems">
                  <li>
                    <a class="dropdown-item" href="/">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex mt-2">
              <button class="btn btn-outline-light" type="submit">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                Cart
                <span class="badge bg-light text-dark ms-1 rounded-pill badge">
                {navDetails.length}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;