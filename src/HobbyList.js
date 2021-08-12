import react from "react";
import Hobby from './Hobby'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const images = require.context('./svgs',true)
const hobbySet = ["musique","jeux","litterature","programmation","technologie","jdr"]


export default class HobbyList extends react.Component{
    loadImage = imageName => (images(`./${imageName}`).default)

    constructor(props){
        super(props)
        this.name = props.name
        this.hobbyList = []
        this.src = './svgs/'+ this.name
        hobbySet.forEach((hobby) =>{
            this.hobbyList.push(
                <>
                <Popup open={openPopup()} position="right center">
                    <div>Popup content here !!</div>
                </Popup>
                <Hobby name={hobby} onclick={openPopup()} />
                </>
            )
        })
    }
    render(){
        return <>{this.hobbyList}</>
    }
}