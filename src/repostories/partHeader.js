import "./partHeader.css";
function PartHeader ({contend}){

    return (
        <div className='header'>
            <p id="slash">//</p>
             <span id="contend">{contend}</span>  
            <div className='dottedLine'></div>
        </div>
    )
};
export default PartHeader;