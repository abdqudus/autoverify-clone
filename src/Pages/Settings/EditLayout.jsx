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
import { useTranslation } from "react-i18next";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";

const EditLayout = () => {
    const { t } = useTranslation()
    const { id } = useParams();
    const [_, setIsValidityChecked] = useState(false);
    const navigate = useNavigate();

    const handleSaveLayout = async () => {
        setIsValidityChecked(true);
        const payload = {
            message: layoutSettings.msgContent || data.message,
            subject: layoutSettings.subject || data.subject,
            name: layoutSettings.name || data.name,
        };
        if (!payload.message || !payload.subject || !payload.name) {
            alert(t('editlayout.all_fields_required'));
            throw Error();
        }
        const access_token = await tokenUtil.getToken();
        if (access_token === null) {
            navigate("/login");
        }
        const endpoint = new base.LayoutEndpoint(access_token, {});
        await endpoint.partial_update(id, payload);
        alert(t('editlayout.saved_successfully'));
    };

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
    };

    const { data } = useQuery({
        queryKey: ["layout-edit"],
        queryFn: fetchLayout
    });

    useEffect(() => {
        if (data) {
            setLayoutSettings({ ...layoutSettings, name: data.name, subject: data.subject });
            setTextVal(data.message);
        }
    }, [data]);

    const [textVal, setTextVal] = useState('');
    const [layoutSettings, setLayoutSettings] = useState({ name: '', subject: '', msgContent: textVal });

    const handleChange = (e) => {
        setLayoutSettings(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    return (
        <div className="mt-6">
            <DashBoardSubRoutesWrapper>

                <SettingsWrapper>
                    <LayoutNavigations />
                    <div>
                        <div className="mt-6 md:mt-0">
                            <h2 className="text-[#2980B9] font-open-sans text-[1.11625rem] leading-[19.8px] mb-3">
                                {t('editlayout.edit_layout')}
                            </h2>

                            <h4 className="font-bold text-sm mt-4">{t('editlayout.layout_name')}</h4>
                            <p className="block text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-2">
                                {t('editlayout.layout_name_description')}
                            </p>
                            <Input handleChange={(e) => handleChange(e)} value={layoutSettings.name} id="name" />
                        </div>
                        <div className="mt-4">
                            <h4 className="font-bold text-sm mt-2">{t('editlayout.subject')}</h4>
                            <p className="block text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-2">
                                {t('editlayout.subject_description')}
                            </p>
                            <Input id="subject" placeholder={t('editlayout.subject_placeholder')} handleChange={(e) => handleChange(e)} value={layoutSettings.subject} />
                        </div>
                    </div>
                </SettingsWrapper>
                <SettingsWrapper>
                    <div className="md:col-start-2">
                        <div className="mt-6">
                            <h4 className="font-bold text-sm mt-4">{t('editlayout.message_content')}</h4>
                            <p className="block text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-2">
                                {t('editlayout.message_content_description')}
                            </p>
                            <TextEditor val={{ textVal, setTextVal, setLayoutSettings }} />
                            <button onClick={handleSaveLayout} className="h-[34px] text-sm font-open-sans leading-5 my-4 bg-[#5CB85C] border border-[#4CAE4C] w-[100.25px] rounded-[4px] text-white">
                                {t('editlayout.save_layout')}
                            </button>
                        </div>
                    </div>
                </SettingsWrapper>
            </DashBoardSubRoutesWrapper>
        </div>
    );
};

export default EditLayout;
