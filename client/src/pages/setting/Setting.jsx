
import Slidebar from '../../components/slidebar/Slidebar';
import './Setting.css';
export default function Setting(){
    return(
        <>
      <div className="setting">
          <div className="settinginfo">
              <div className="settingtitle">UPDATE YOUR PROFILE</div>
              <div className="settingline"></div>
              <div className="settingprofile">
                  <img src="" alt="" />
                 <label htmlFor="profilepic">
                 <i className="far fa-user-circle  usercircle"></i>
                 </label>
                 
                  <input type="file" id="profilepic" />
              </div>
              <form className="settingform" >
                    <input type="text" placeholder="USERNAME"className="settinginput"/>
                    <input type="text" placeholder="EMAIL" className="settinginput"/>
                    <input type="password" placeholder="PASSWORD"className="settinginput"/>
                  
              </form>
              <div className="updatebutton">
                  <button>UPDATE</button>
              </div>
          </div>
          <div>
            <Slidebar/>
          </div>
      </div>
        </>
    )
};