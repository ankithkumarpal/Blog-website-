import './Readpost.css'
import Readsinglepost from '../../components/readsinglepost/Readsinglepost'
import Slidebar from '../../components/slidebar/Slidebar';
function Readpost(){
    return(
        <>
        <div className="Readpost">
            <div className="firstdiv">
            < Readsinglepost/>
            </div>
            <div>
            <Slidebar/>
            </div>
      
      
        </div>
        </>
    )
}

export default Readpost;