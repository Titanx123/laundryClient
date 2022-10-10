import { useState } from "react"
import "./style.css"
import axios from "axios"
import Moment from 'moment';

const Summary=(props)=>{
    const date = Moment().format("MMM Do YYYY, h:mm");
    const number=localStorage.getItem("num");
    const zeroPad = (num) => String(num).padStart(4, '0')

    const handlesubmit=()=>{
        if(add){
            props.setconfirm(true);//alert
            props.setTrigger(false) ;//summary
        //const time=new Date()
        
        axios({
            url: "https://laundrycart.onrender.com/order/create",
            method: "POST",
            headers: {
                "authorization":localStorage.authorization
            },
            data: {producttype: props.state, 
                subtotal: props.subtotal,
                orderid:"ORD"+zeroPad(number),
                datetime:date
            }
        }).then((res)=>{
            let ans=(parseInt(localStorage.getItem("num"))+parseInt(1))
            //console.log(ans)
            localStorage.setItem("num",ans)
        }).catch((err)=>{
            console.log(err)
        })
        }else{
            return window.alert("Please select store address")
        }
        
        //axios.post("http://localhost:3001/order/create",data:{},{headers:{},})

    }

    const [add, setAdd]=useState(false)
    return props.trigger ? (
        <>
        <div id="for-black"></div>
        <div className="summary-page">
        <div className="summary-header">
            <h2 className="header-sum" >Summary</h2>
            <h2 className="header-close" onClick={()=>{props.setTrigger(false)}} >X</h2>
        </div>
        <div className="store-add">
            <select className="store-loc" onChange={(e)=>{if(e.target.selectedIndex===1){setAdd(true)}else{setAdd(false)}}}>
                <option value="" >Store Location</option>
                <option className="add-opt" >Jp Nagar</option>
            </select>
            <span className="store-name">Store Address:</span>
            <span className="store-phone" >Phone:</span>
            <span className="store-add-val" >{add ? 'Near Phone booth, 10th road,' :"—"}</span>
            <span className="store-phone-val" >{add ? "91 9999999999" :"—"}</span>
        </div>
        <div className="section-name" >Order Details</div>
            {props.state.map((obj,i)=>{
                return (
                <div className="order-details" key={i}>
                    <span className="item-type">{obj.name}</span>
                    <span className="item-method">{obj.washType} </span>
                    <span className="item-eq">{obj.multiple}=</span>
                    <span className="item-price">{obj.price}</span>
                </div>
                )
            })}
        <span className="sec-sub" >Sub Total:</span>
        <span className="sec-val">{props.subtotal}</span>
        <span className="pickup" >Pickup-Charges:</span>
        <span className="pick-val">90</span>
        
        <section className="total-bar">
            <span className="name-total">Total:</span>
            <div className="total-val">{props.subtotal+90} rs</div>
        </section>
        <div className="user-add">Address</div>
        <div className="useraddress">
            <div className="home">
                <p style={{textAlign:"left"}}><strong>Home</strong></p>
                <p>#223, 10th road, Jp Nagar, Bangalore</p>
            </div>
        </div>
        <div className="btn-bar" >
            <button className="btn-confirm" onClick={handlesubmit} >Confirm</button>
        </div>
        </div>
        </>
    ) : ""
}
export default Summary