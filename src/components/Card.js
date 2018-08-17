import React, {Component} from 'react';

class Card extends Component {

    changeCard = (e) => {
        console.log(this);
    }

    render() {
        return (
            <div onClick={this.changeCard} className='flex flex-column items-center tc bg-light-green b--green dib br3 pa3 ma3 bw2 grow shadow-5 w-80 w-50-ns w-25-l'>
                <img src={`https://robohash.org/${this.props.id}?200x200`} width='200' height='200' alt={`robot named ${this.props.name}`} />
                <div className='robotInfo'>
                    <h2 className='mt3'>{this.props.name}</h2>
                    <p className='mt2'>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;