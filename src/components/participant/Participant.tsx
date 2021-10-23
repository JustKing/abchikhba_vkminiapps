import React from "react";
import { IParticipant } from "../../App";
import { SimpleCell, Avatar } from "@vkontakte/vkui";

type Props = {
  participant: IParticipant;
};
export default class Participant extends React.Component<Props> {
  linkToGithub = () => {
    window.open(this.props.participant.github);
  };

  render() {
    return (
      <SimpleCell
        description={this.props.participant.speciality}
        before={<Avatar src={this.props.participant.img} />}
        onClick={this.linkToGithub}
      >
        {this.props.participant.name}
      </SimpleCell>
    );
  }
}
