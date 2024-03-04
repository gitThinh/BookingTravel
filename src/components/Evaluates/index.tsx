import * as React from 'react';

interface IAppProps {
    id: string;
    boardName?: string;
    text: string;
    userName: string;
}

const index: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="w-ful text-[#101828]">
        <div className="flex flex-row gap-8">
            <div className='min-w-8'>
                <img src="https://mixivivu.com/quote.svg" alt="" />
            </div>
            <div className="tracking-tight">
                {props.boardName && <p className='font-bold text-[20px] mb-4'>{props.boardName}</p> }
                <pre className='text-lg mb-5 whitespace-pre-line font-sans'>{props.text}</pre>
                <p className='font-semibold text-lg'>{props.userName} -</p>
            </div>
        </div>
    </div>
  )
}

export default index;
