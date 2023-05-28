import "bootstrap/dist/css/bootstrap.min.css";
 import "../../chats.css";
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
const UserChatComponent = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label className="chat-btn" htmlFor="check">
        <QuestionAnswerRoundedIcon className="comment"/>
        <CancelRoundedIcon className="close"/>
      </label>
      <div className="chat-wrapper3">
        <div className="chat-header3">
          <h6>Let's Chat - Online</h6>
        </div>
        <div className="chat-form">
          <div className="cht-msg">
            <p>Chat history</p>
          </div>
          <textarea
            id="clientChatMsg"
            className="form-control"
            placeholder="Your Text Message"
          ></textarea>

          <button className="btn btn-success btn-block">Submit</button>
      </div>
      </div>
    </>
  );
};

export default UserChatComponent;

    
