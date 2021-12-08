import {GraphData} from '../lib/GraphData';
export default function ProgressBar(){
    return(
        <div className='graphDiv'>
            {GraphData.sort((a, b)=>{
                if (a.score > b.score) {
                    return -1;
                }
                if (a.score < b.score) {
                    return 1;
                }
                return 0;
            }).map(({title, score}, id)=>(
                <div className='graphcontent' key={id}>
                    <div className={`progressCircle p${score} ${ score > 50 ? 'over50' : ''}`}>
                        <span className={`percentageNumbers `}>{score}%</span>
                        <div className='leftHalfClipper'>
                            <div className='first50Bar'></div>
                            <div className={`valueBar ${ score > 50 ? 'greenBG' : ''}`}></div>
                        </div>
                    </div>
                    <div className='graphTitle'>{title}</div>
                </div>
            ))}
        </div> 
    )
}