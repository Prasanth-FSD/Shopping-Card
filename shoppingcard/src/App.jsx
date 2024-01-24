import "./App.css";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useState } from "react";

function App() {
  
  const [cartData, setCartData] = useState([]);
  const [btnText, setBtnText] = useState([]);

  for(let i=1;i <= 12;i++){
    let obj = { id : i, txt : "Add to Cart"};
    btnText.push(obj);
  }

  let cardDetails = [
    {
      id: 1,
      TopSale: true,
      cardImg:
        "https://images.unsplash.com/photo-1629450646456-b7a01cdec01a?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "BMW 7",
      starRating: 4,
      mrp: 1599380,
      offer: 2,
      btnTxt: btnText[0].txt
    },
    {
      id: 2,
      TopSale: false,
      cardImg:
        "https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "6",
      starRating: 3,
      mrp: 7099962,
      offer: 7,
      btnTxt: btnText[1].txt
    },
    {
      id: 3,
      TopSale: true,
      cardImg:
        "https://images.unsplash.com/photo-1612545667889-b061512d0dfa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "M",
      starRating: 5,
      mrp: 18499975,
      offer: 10,
      btnTxt: btnText[2].txt
    },
    {
      id: 4,
      TopSale: false,
      cardImg:
        "https://images.unsplash.com/photo-1612067247892-af0e46e78d70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      productName: "2",
      starRating: 2,
      mrp: 10500025,
      offer: 6,
      btnTxt: btnText[3].txt
    },
    {
      id: 5,
      TopSale: true,
      cardImg:
        "https://images.pexels.com/photos/113176/pexels-photo-113176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productName: "X",
      starRating: 4,
      mrp: 25088812,
      offer: 4,
      btnTxt: btnText[4].txt
    },
    {
      id: 6,
      TopSale: true,
      cardImg:
        "https://i.pinimg.com/564x/a7/26/68/a726684d84bf62f0f059206e27c97b8b.jpg",
      productName: "3",
      starRating: 5,
      mrp: 38966625,
      offer: 8,
      btnTxt: btnText[5].txt
    },
    {
      id: 7,
      TopSale: true,
      cardImg:
        "https://i.pinimg.com/564x/fb/26/bf/fb26bf0dadfd3741e5e6ea9a8a2f8a4b.jpg",
      productName: "BMW 4",
      starRating: 5,
      mrp: 3526665,
      offer: 7,
      btnTxt: btnText[6].txt
    },
    {
      id: 8,
      TopSale: false,
      cardImg:
        "https://i.pinimg.com/564x/67/16/8d/67168d0d674b2cc0ae81cf88aac30711.jpg",
      productName: "Z 24",
      starRating: 3,
      mrp: 60777771,
      offer: 10,
      btnTxt: btnText[7].txt
    }
  ];
  
  let press = (product) => {
    let foundButton  = btnText.find((ele)=> product.id === ele.id)
    // console.log(btnElement);

    if (foundButton .txt === "Add to Cart") {

      setCartData([...cartData, product]);

      setBtnText((prevBtnText) => {
        return prevBtnText.map((btn) => {
          if (btn.id === product.id) {
            // console.log({ ...btn, txt: "Remove from Cart" });
            return { ...btn, txt: "Remove from Cart" };
          } else {
            return btn;
          }
        });
      });
    }else if(foundButton .txt === "Remove from Cart"){
      setCartData(cartData.filter(ele => ele.id != product.id));
      setBtnText((prevBtnText) => {
        return prevBtnText.map((btn) => {
          if (btn.id === product.id) {
            return { ...btn, txt: "Add to Cart" };
          } else {
            return btn;
          }
        });
      });
    }
    
    
  };

  return (
    <>
      <Navbar navDetails={cartData}/>
      <Header />
      <section className="content-section py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
                cardDetails.map((card,index)=>{
                  return <Card key={index++} props={card} press={press}/>
                })
              }
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;