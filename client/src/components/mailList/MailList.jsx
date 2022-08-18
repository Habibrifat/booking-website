import './mailList.css';
const MailList = () => {
    return (
        <div className="mail">
            <h2 className="mailTitle">Save time, save money!</h2>
            <span className="mailParagraph">Sign up and we'll send the best deals to you</span>
            <div className="mailDescription">
                <input type="text" className="email" placeholder="Your mail" />
                <button>Subscribe</button>
            </div>
        </div>
     );
}
 
export default MailList;