import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../component/Input";
import LayoutNavigations from "../../component/LayoutNavigations";
import SettingsWrapper from "../../component/SettingsWrapper";
import { TextEditor } from "../../component/TextEditor";
import { useQuery } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";


const EditLayout = () => {
    const { id } = useParams();
    const [_, setIsValidityChecked] = useState(false)
    const navigate = useNavigate();
    const handleSaveLayout = async () => {
        setIsValidityChecked(true);
        const payload = {
            message: layoutSettings.msgContent || data.message,
            subject: layoutSettings.subject || data.subject,
            name: layoutSettings.name || data.name,
        }
        if (!payload.message || !payload.subject || !payload.name) {
            alert('All fields are required');
            throw Error();
        }
        const access_token = await tokenUtil.getToken();
        if (access_token === null) {
            navigate("/login");
        }
        const endpoint = new base.LayoutEndpoint(access_token, {});
        await endpoint.partial_update(id, payload);
        alert('Saved Successfully');
    }
    const fetchLayout = async () => {
        console.log('...fetching', id);
        const access_token = await tokenUtil.getToken();
        if (access_token === null) {
            navigate("/login");
        }
        const endpoint = new base.LayoutEndpoint(access_token, {});
        const res = await endpoint.read(id);
        console.log('data', res);
        return res;
    }
    const { data } = useQuery({
        queryKey: ["layout-edit"],
        queryFn: fetchLayout
    })
    useEffect(() => {
        if (data) {
            setLayoutSettings({ ...layoutSettings, name: data.name, subject: data.subject })
            setTextVal(data.message)
        }
    }, [data])
    const [textVal, setTextVal] = useState('');
    const [layoutSettings, setLayoutSettings] = useState({ name: '', subject: '', msgContent: textVal })
    const handleChange = (e) => {
        setLayoutSettings(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    return (
        <div className="mt-6">
            <SettingsWrapper>
                <LayoutNavigations />
                <div>
                    <div className="mt-6 md:mt-0">
                        <h2 className="text-[#2980B9] font-open-sans text-[1.11625rem] leading-[19.8px] mb-3">
                            New layout
                        </h2>
                        <h3 className="text-[#333333] font-open-sans text-[1.11625rem] leading-[19.8px]">
                            Configuration template
                        </h3>
                        <h4 className="font-bold text-sm mt-4">Layout name</h4>
                        <p className="block text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-2">
                            Choose name that will help you identify layout in future.
                        </p>
                        <Input handleChange={(e) => handleChange(e)} value={layoutSettings.name} id="name" />
                    </div>
                    <div className="mt-4">
                        <h4 className="font-bold text-sm mt-2">Subject</h4>
                        <p className="block text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-2">
                            Message with code to customer will have this subject.
                        </p>
                        <Input id="subject" placeholder="Successfull Order" handleChange={(e) => handleChange(e)} value={layoutSettings.subject} />
                    </div>
                </div>
            </SettingsWrapper>
            <SettingsWrapper>
                <div className="md:col-start-2">

                    <div className="mt-6">
                        <h4 className="font-bold text-sm mt-4">Message content</h4>
                        <p className="block text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-2">
                            Message with this content will be send to customer. In this blank
                            you can use <span className="font-bold">tags</span> , which will
                            be exchanged e.g. [CODES] for code.
                        </p>

                        <TextEditor val={{ textVal, setTextVal, setLayoutSettings }} />
                        <button onClick={handleSaveLayout} className="h-[34px] text-sm font-open-sans leading-5 my-4 bg-[#5CB85C] border border-[#4CAE4C] w-[100.25px] rounded-[4px] text-white">
                            Save layout
                        </button>
                    </div>
                </div>
                {/* <div className="tags md:col-start-1 md:row-start-1 md:row-end-2 bg-[#F5F5F5] mt-6 border border-[#E3E3E3] p-4">
                    <h3 className="text-[#333333] font-open-sans text-[1.11625rem] leading-[19.8px]">
                        Tags in message
                    </h3>
                    <p className="mt-6 text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans ">
                        Tags below can be used in message and will be replaced for:
                    </p>
                    <ul className="px-4 text-[#333333] flex flex-col gap-1 text-sm leading-[22.4px] font-open-sans">
                        <li>
                            <span className="font-bold">[CODES] </span>- code downloaded from
                            base
                        </li>
                        <li>
                            <span className="font-bold">[THUMBNAIL] </span>- the product image
                        </li>
                        <li>
                            <span className="font-bold">[TITLE] </span>- product name
                        </li>
                        <li>
                            <span className="font-bold">[PRICE_PER_PRODUCT] </span>- price per product
                        </li>
                        <li>
                            <span className="font-bold">[TOTAL_PRICE] </span>- the aggregrate price
                        </li>
                        <li>
                            <span className="font-bold">[QUANTITY] </span>- quantity ordered
                        </li>
                        <li>
                            <span className="font-bold">[CURRENCY] </span>- currency
                        </li>
                        <li>
                            <span className="font-bold">[TRANSACTION_ID] </span>- Transaction ID
                        </li>
                        <li>
                            <span className="font-bold">[BUYER_EMAIL] </span>-customer e-mail
                            address
                        </li>
                        <li>
                            <span className="font-bold">[BUYER_PHONE] </span>-customer mobile
                            number
                        </li>
                        <li>
                            <span className="font-bold">[BUYER_NAME] </span>-customer name
                        </li>
                    </ul>
                    <p className="text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-3">
                        tags that only can be used for eBay transaction:
                    </p>
                    <ul className="px-4 text-[#333333] flex flex-col gap-1 text-sm leading-[22.4px] font-open-sans">
                        <li>
                            <span className="font-bold">[EBAY_USER] </span>- username
                        </li>
                        <li>
                            <span className="font-bold">[PAYPAL_MAIL] </span>- paypal address
                        </li>
                        <li>
                            <span className="font-bold">[EBAY_OFFID] </span>- auction number
                        </li>
                    </ul>
                    <p className="text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-3">
                        If the code you are sending is a graphic file then the [CODE_IMAGE]
                        tag will display the file directly in the message.
                    </p>
                </div> */}
            </SettingsWrapper>
        </div>
    );
};

export default EditLayout;
