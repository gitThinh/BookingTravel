import * as React from 'react';


interface IAppProps {
    titleLine1: string;
    titleLine2: string;
    details: string;
}

const index: React.FunctionComponent<IAppProps> = (props) => {
  return(
    <div className="w-full flex pb-4 mb-10 flex-col gap-4 lg:flex-row">
        <div className="lg:w-3/5 items-center text-[#101828]">
            <h1 className='text-[36px] font-bold'>{props.titleLine1}</h1>
            <h1 className='text-[36px] font-bold'>{props.titleLine2}</h1>
            <div className="under-line mt-8">
                <div className=' flex gap-1'>
                    <span className="underline-item-header"></span>
                    <span className="underline-item-header"></span>
                    <span className="underline-item-header"></span>
                    <span className="underline-item-header"></span>
                    <span className="underline-item-header"></span>
                    <span className="underline-item-header"></span>
                    <span className="underline-item-header"></span>
                    <span className="underline-item-header"></span>
                </div>
            </div>
        </div>
        <div className="text-[#59606c] text-[17px] font-medium lg:w-2/5 ">{props.details}</div>
    </div>
  ) ;
};

export default index;
