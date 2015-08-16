import React from 'react';
import VoteButtons from './VoteButtons';
import VoteCount from './VoteCount';
import VoteStore from '../stores/VoteStore';
import AltContainer from 'alt/AltContainer';
import CurrentAction from './CurrentAction';

export default class LivePlantApp extends React.Component {
  componentDidMount() {
    VoteStore.fetchVotes();
    VoteStore.fetchCurrentAction();
    window.setInterval(VoteStore.fetchVotes, 1000);
    window.setInterval(VoteStore.fetchCurrentAction, 1000);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe src="http://www.twitch.tv/liveplantio/embed"
                      frameBorder="0"
                      scrolling="no"
                      height="378"
                      width="620"></iframe>
                <a href="http://www.twitch.tv/liveplantio?tt_medium=live_embed&tt_content=text_link"
                   className="twitch-link">
                  Watch live video from liveplantio on www.twitch.tv
                </a>
            </div>
          </div>
          <div className="col-sm-6">
            <AltContainer store={VoteStore}>
              <CurrentAction />
            </AltContainer>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <AltContainer store={VoteStore}>
              <VoteButtons />
            </AltContainer>
          </div>
          <div className="col-sm-6">
            <AltContainer store={VoteStore}>
              <VoteCount />
            </AltContainer>
          </div>
        </div>
      </div>
    );
  }
}
