
interface MyBtn {
    title: string;
    icon?: JSX.Element;
    onclick: () => void;
    style: string;

} 
const MyBtn = ({title , icon , onclick , style }:MyBtn) => {
  return (
    <div onClick={onclick} className={`${style} cursor-pointer flex gap-4 rounded-md bg-onPrimary text-center items-center justify-center text-white font-bold`}>

        <span>

            {title}
        </span>
            { icon &&
               <span>
                {icon}
            </span>
        }
    </div>
  )
}

export default MyBtn