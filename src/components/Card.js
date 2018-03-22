import React, {Component} from 'react';

class Card extends Component {

    changeCard = (e) => {
        console.log(this);
    }

    render() {
        return (
            <div onClick={this.changeCard} className='tc bg-light-green b--green dib br3 pa3 ma2 bw2 grow shadow-5 w-25'>
                <img src={`https://robohash.org/${this.props.id}?200x200`} width='200' height='200' alt={`robot named ${this.props.name}`} />
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;