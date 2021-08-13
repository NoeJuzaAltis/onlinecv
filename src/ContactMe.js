import './Contact.css'
import linkedin from './svgs/linkedin.svg'
import github from './svgs/github.svg'
import mail from './svgs/mail.svg'
function ContactMe() {
    return (
        <div>
          <div className="contact">
                <h1>Alors contactez moi!</h1>
                <div className="contLink">
                    <div class="lnkEl"><a target="_blank" href="https://linkedin.com/in/noé-juzan-a3aa88210"><img src={linkedin}/></a></div>
                    <div class="lnkEl"><a target="_blank" href="https://github.com/NoeJuza"><img src={github}/></a></div>
                    <div class="lnkEl"><a href="mailto:noe.juzan.pro@gmail.com"><img class="mail" src={mail}/></a></div>
                </div>
          </div>
        </div>
    );
  }
  
  export default ContactMe;