import React from 'react'
import '../assets/css/LightBulb.css'
class LightBulb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn:true
        }
    }
    switch() {
        if (this.state.isOn == true) {
            this.setState({isOn:false})
        } else {
            this.setState({isOn:true})
        }
        console.log('Switch!!!', this.state.isOn)
    }
    render() { // method
        // expression binding
        return (
            <div>
                <img 
                src={
                    this.state.isOn == true ? 'on.jpg' : 'off.jpg'
                } 
                alt="bulb" 
                className="image"
                />
                <input type="button" value="Switch" onClick={() => this.switch()} />
            </div>



        )
    }
}

export { LightBulb }
