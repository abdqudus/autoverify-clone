import EntriesCount from '../component/EntriesCount'
import PaginatorBtn from '../component/PaginatorBtn'
import * as tokenUtil from '../utils/tokenUtil';
import * as base from '../utils/base';
import ConnectedAcctElement from './ConnectedAcctElement';
import { useNavigate } from 'react-router-dom';
import { toastError } from '../utils/toast';
import { useTranslation } from 'react-i18next';

const EbayConnected = ({ data, paginator }) => {
  const navigate = useNavigate();
  const { t } = useTranslation()
  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate('/login');
    }
    return access_token;
  };

  const createNewAcct = async () => {
    const access_token = await _checkLog();
    const endpoint = new base.EbayAccount(access_token, {});
    const acct = await endpoint.create({
      'is_active': true,
    });
    if ('account_id' in acct) {
      const payload = {
        "success_url": `${base.getDomain()}/ebay/accounts`,
        "cancel_url": `${base.getDomain()}/fail`
      }
      const res = await endpoint.activate(acct.account_id, payload);
      if ('ebay_login_url' in res) {
        base.createAndClickLink(res.ebay_login_url);
      } else {
        toastError(t('could-not-activate-acct') + acct.account_id);
      }
    } else {
      toastError(t('could-not-create-acct'));
    }
  }

  return (
    <div className="mt-4">
      <EntriesCount />
      <div className="lg:grid mt-8 grid-cols-[1fr_300px] gap-4">
        <div>
          <h1 className="text-[#333333] sm:w-[60%] pb-2 border-b border-[#CCCCCC]  text-[1rem] font-open-sans leading-[17.68px]">
            {t('accounts')}
          </h1>
          <div className="">
            <div className="border max-w-full overflow-x-scroll md:overflow-hidden mt-3  border-[#DDDDDD]">
              <table className="min-w-[550px] w-full">
                <thead className="bg-[#2c2c2c] text-white font-open-sans px-2  text-[.75rem]">
                  <tr>
                    <th className=" py-2 w-[10%]  text-white text-left px-2  border-white  text-[.75rem] font-semibold">
                      {t('all-prod.ID')}
                    </th>
                    <th className=" w-[45%]  text-white text-left px-2  border-white  text-[.75rem] font-semibold">
                      {t('ebay-username')}
                    </th>
                    <th className=" w-[15%]  text-white text-left px-2  border-white  text-[.75rem] font-semibold">
                      {t('connection')}
                    </th>
                    <th className=" w-[15%]  text-white text-left px-2  border-white  text-[.75rem] font-semibold">
                      {t('all-prod.status')}
                    </th>
                    <th className=" w-[15%]  text-white text-left px-2  border-white  text-[.75rem] font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d, i) => (
                    <ConnectedAcctElement key={d.account_id} d={d} i={i} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end mt-6">

              <PaginatorBtn paginator={paginator} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="mt-4 lg:mt-0 pb-2 border-b border-[#CCCCCC] ">
            {t('connect-new-acct')}
          </h3>
          <button onClick={createNewAcct} className="w-full  px-3 h-[34px] bg-[#5cb85c] text-white border border-[#4cae4c] rounded-[4px]">
            {t('connect-new-acct')}
          </button>
        </div>
      </div>

    </div>
  );
};

export default EbayConnected;
// className="lg:grid grid-cols-[1fr_200px]"
