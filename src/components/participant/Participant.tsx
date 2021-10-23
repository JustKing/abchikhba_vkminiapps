import React from "react";
import { IParticipant } from "../../App";
import "./Participant.css";

type Props = {
  participant: IParticipant;
};

export default class Participant extends React.Component<Props> {
  render() {
    return (
      <div className="abch-card-wrapper">
        <div className="abch-card">
          <div className="abch-title">
            <div className="abch-avatar">
              <img src={this.props.participant.img} alt={this.props.participant.name} height="110px" />
            </div>
            <div className="abch-name">{this.props.participant.name}</div>
          </div>
          <hr className="abch-separator" />
          <div className="abch-speciality">
            {this.props.participant.speciality}
          </div>
          <div className="abch-logo">{this.props.participant.logo}</div>
        </div>
      </div>
    );
  }
}
