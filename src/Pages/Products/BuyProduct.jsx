import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

import * as  tokenUtil from "../../utils/tokenUtil";
import * as  base from "../../utils/base";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const BuyProduct = () => {
    const access_token = undefined;     // leave this as is
    const [quantity, setQuantity] = useState(1)
    const [paymentMethodId, setPaymentMethodId] = useState(null)

    const { product_id } = useParams()
    const navigate = useNavigate();

    const handlePay = async () => {
        if (paymentMethodId !== null) {

            let payment_method;
            for (let i of data.payment_methods) {
                if (i.id === paymentMethodId) {
                    payment_method = i;
                    break;
                }
            }
            if (!payment_method) {
                alert('An Internal Error Occured');
                throw Error('An Internal Error Occured');
            }
            if (!(payment_method.is_active && payment_method.account.is_init)) {
                alert('This payment method is currently not active');
                throw Error('Invalid payment Method');
            }
            if (quantity < 0) {
                alert('The quantity must be more than zero');
                throw Error('Invalid Quantity');
            }
            const paymentObj = {
                products: [{
                    "product_id": product_id,
                    "amount": quantity
                }],
                // store_owner_id
                "payment_method_id": paymentMethodId,
                "store_owner_id": data.store_owner_id,
                "success_url": `${base.getDomain()}/success`,
                "cancel_url": `${base.getDomain()}/failure`
            }

            // const access_token = await tokenUtil.getToken();
            // if (access_token === null) {
            //     navigate('/login');
            // }
            // const endpoint = new base.CheckoutEndpoint(access_token, {});
            const endpoint = new base.CheckoutEndpoint(access_token, {});
            endpoint.del_header('Authorization');
            const res = await endpoint.checkout(paymentObj);
            if ('checkout_link' in res) {
                base.createAndClickLink(res.checkout_link);
            } else {
                alert('Unable to checkout');
            }
        } else {
            alert('PLease select a payment method');
        }
    }
    const handleSetPaymentMethod = (id, isActive, isInit) => {
        if (isActive && isInit) {
            setPaymentMethodId(id)
        }
    }
    const getProductDetails = async (id) => {
        // const access_token = await tokenUtil.getToken();
        // if (access_token === null) {
        //     navigate("/login");
        // }
        const endpoint = new base.ProductEndpoint(access_token, {});
        endpoint.del_header('Authorization');
        const res = await endpoint.get_buy_data(id);
        return res;
    }
    const { data } = useQuery(
        {
            queryKey: ["prod-checkout"],
            queryFn: () => getProductDetails(product_id)
        },
    )
    console.log(data)
    if (data)
        return (
            <div className="lg:py-4 ">
                <header className="bg-white py-6 px-4">
                    <nav className="flex justify-between items-center gap-4 flex-wrap">
                        <div>
                            <img src="/header.png" alt="" />
                        </div>
                        <div className="px-4 border-2 border-[#e9edee] rounded-[3px] py-2">
                            <div>
                                <div className="flex flex-wrap gap-3 items-center">
                                    <img src="/united-states.png" alt="" />
                                    <p className="text-[#1A1A1A] font-semibold text-[1rem]">English</p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </nav>
                </header>
                <div className="mt-6 p-4 lg:grid lg:grid-cols-[1fr_280px] gap-4 lg:max-w-[1000px] lg:mx-auto lg:rounded-[10px] lg:border border-gray-300 bg-white">
                    <div>
                        <div className="product__details">
                            <div className="title text-center">
                                <h1>{data.products.name}</h1>
                                <p>{data.products.description}</p>
                            </div>
                            <div className="image__price my-4 flex sm:sm:flex-row sm:justify-start flex-col gap-4 justify-center items-center">
                                <div className="img border  border-red-500 w-[143px] overflow-hidden ">
                                    <img className="w-full max-w-full bg-cover" src={data.products.cloudinary_thumbnail} alt="" />
                                </div>
                                <div className="product  flex flex-col gap-3">
                                    <p>{data.products.name}</p>
                                    <p>{data.products.price} PLN</p>
                                    <div className="flex items-center  gap-3">

                                        <p>Quantity:</p>
                                        <div className="flex gap-2 items-center">
                                            <button onClick={() => quantity != 1 && setQuantity(quantity - 1)} className="w-[30px] h-[30px] flex justify-center items-center bg-[#E9EDEE] text-[#A9ABAC]  font-bold">-</button>
                                            <span>{quantity}</span>
                                            <button onClick={() => setQuantity(quantity + 1)} className="w-[30px] h-[30px] flex justify-center items-center bg-[#E9EDEE] text-[#A9ABAC]  font-bold">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="payment__methods my-4">
                            <h3>Select the payment method</h3>
                            <div className="methods mt-4 gap-4 grid vsm:grid-cols-1 grid-cols-card">
                                {data.payment_methods.map(pm => (<label onClick={() => handleSetPaymentMethod(pm.id, pm.is_active, pm.account.is_init)} key={pm.id} htmlFor={pm.name} className={`method ${pm.is_active && pm.account.is_init ? 'hover:border-blue-500 cursor-pointer has-[:checked]:bg-blue-100  has-[:check]:bg-opacity-50 has-[:checked]:border-blue-500' : 'cursor-not-allowed  has-[:checked]:bg-gray-100 has-[:check]:bg-opacity-50'} transition-[border]  border-2   relative flex justify-center items-center gap-4 h-[104px] px-4 bg-white  border-gray-300 rounded-[4px]`}>
                                    <div className="">
                                        {pm.account_type == 'STRIPE' ?
                                            <div className="flex  justify-center items-center flex-col gap-1">
                                                {pm.account.is_init && pm.is_active && <span className="absolute -top-0 left-0 p-2 text-white rounded-[4px] text-sm font-bold bg-green-500">active</span>}
                                                <p>Stripe</p>
                                                <img className="w-[100px]" src="/stripe-big.png" alt="" />
                                            </div>
                                            :
                                            <div className="flex justify-center items-center flex-col gap-1">
                                                {pm.account.is_init && pm.is_active && <span className="absolute -top-0 left-0 p-2 text-white rounded-[4px] text-sm font-bold bg-green-500">active</span>}
                                                <p>Paypal</p>
                                                <img className="w-[100px]" src="/paypal-pay.png" alt="" />
                                            </div>}


                                    </div>
                                    <input type="radio" name="payment-method" id="" className="sr-only " />
                                </label>))}

                            </div>
                        </div>
                        <div className="pay__btn">
                            <p>Total to pay </p>
                            <button className="h-40px text-center px-4 py-3 w-full mt-3 bg-[#2A9FD2] text-white rounded-[4px]" onClick={handlePay}>I confirm and pay</button>
                        </div>
                    </div>
                    <div className="about__seller p-4 lg:px-6 border-t-[3px] lg:border-t-0 lg:border-l-[3px] border-gray-300 mt-4">
                        <h3>Delivery</h3>
                        <p className="my-6">The product will be delivered to your email address provided by stripe or your preferred payment method.</p>
                        {/* <button>Contact seller</button>  */}
                    </div>
                </div>
            </div>
        )
}

export default BuyProduct
