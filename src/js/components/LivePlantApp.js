import React from 'react';
import VoteButtons from './VoteButtons';
import VoteCount from './VoteCount';

export default class LivePlantApp extends React.Component {
  constructor(props) {
    super(props);
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
            <h1>Current Action</h1>
            <span className="big-ass-text">Water</span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <VoteButtons actionCollection={this.props.app.actions} />
          </div>
          <div className="col-sm-6">
            <VoteCount actionCollection={this.props.app.actions} />
          </div>
        </div>
      </div>
    );
  }
}