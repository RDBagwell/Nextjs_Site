import {GraphData} from '../lib/GraphData';
import graphStyle from './progressBar.module.css';

export default function ProgressBar(){

    return(
        <div className={graphStyle.graphDiv}>
            {GraphData.map(({title, score}, id)=>(
                <div className={graphStyle.graphcontent} key={id}>
                    <div className={graphStyle.progressCircle}>
                        <span className={graphStyle.percentageNumbers}>{score}%</span>
                        <div className={graphStyle.leftHalfClipper}>
                            <div className={graphStyle.first50Bar}></div>
                            <div className={graphStyle.valueBar}></div>
                        </div>
                    </div>
                    <div className={graphStyle.graphTitle}>{title}</div>
                </div>
            ))}
        </div> 
    )
}