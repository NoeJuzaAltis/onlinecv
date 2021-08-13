import './Popup.css'
import './ExperiencePopup.css'
import React from 'react'

export default class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
            <div className='popup_inner'>
                <div className="popupHead">
                    <span class="popupTitle">{this.props.title}</span>
                    <span class="popupClose" onClick={this.props.closePopup}>x</span>
                </div>
                <div className="popupBody">
                    <h3>Description du poste</h3>
                    <p class="popupDesc">{this.props.desc}</p>
                    
                    {this.props.reco ? 
                        <div>
                            <h3>Recomendation du responsable</h3>
                            <p class="popupReco">{this.props.reco}</p>
                        </div>
                    : null}
                </div>
            </div>
        </div>
      );
    }
}