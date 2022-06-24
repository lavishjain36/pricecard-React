import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Card from "./card";


ReactDom.render(
<>
<Card 
 type={"Free"}
 price={["$0","/month"]}
 one={["fas fa-check","Single User"]}
 two ={["fas fa-check","5GB Storage"]}
 three={["fas fa-check","Unlimited Public Projects"]}
 four={["fas fa-check","Community Access"]}
 five ={["fas fa-times","Unlimited Private Projects"]}
 six ={["fas fa-times","Dedicated Phone Support"]}
 seven ={["fas fa-times","Free Subdomain"]}
 eight ={["fas fa-times","Monthly Status Reports"]}
/>

<Card 
 type={"Plus"}
 price={["$9","/month"]}
 one={["fas fa-check",<b>5 Users</b>]}
 two ={["fas fa-check","50GB Storage"]}
 three={["fas fa-check","Unlimited Public Projects"]}
 four={["fas fa-check","Community Access"]}
 five ={["fas fa-check","Unlimited Private Projects"]}
 six ={["fas fa-check","Dedicated Phone Support"]}
 seven ={["fas fa-check","Free Subdomain"]}
 eight ={["fas fa-times","Monthly Status Reports"]}
/>

<Card 
 type={"PRO"}
 price={["$49","/month"]}
 one={["fas fa-check",<><b>Unlimited</b> Users</>]}
 two ={["fas fa-check","50GB Storage"]}
 three={["fas fa-check","Unlimited Public Projects"]}
 four={["fas fa-check","Community Access"]}
 five ={["fas fa-check","Unlimited Private Projects"]}
 six ={["fas fa-check","Dedicated Phone Support"]}
 seven ={["fas fa-check",<><b>Unlimited</b> Free Subdomain</>]}
 eight ={["fas fa-check","Monthly Status Reports"]}
/>
</>
,document.querySelector("#root"));
