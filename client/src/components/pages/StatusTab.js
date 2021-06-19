/* eslint-disable react/no-direct-mutation-state */
import React from "react";

class StatusTab extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggleState: 1,
    }
  }
  toggleTab = (index) => {
    this.setState({toggleState: index});
  }
  render(){
    return (
      <div className="container" style={{paddingTop: "50px"}}>
        <div className="bloc-tabs">
          <button
            className={this.state.toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => this.toggleTab(1)}
          >
            Tab 1
          </button>
          <button
            className={this.state.toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => this.toggleTab(2)}
          >
            Tab 2
          </button>
          <button
            className={this.state.toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => this.toggleTab(3)}
          >
            Tab 3
          </button>
        </div>
  
        <div className="content-tabs">
          <div
            className={this.state.toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2>Content 1</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
              vel voluptatum?
            </p>
          </div>
  
          <div
            className={this.state.toggleState === 2 ? "content  active-content" : "content"}
          >
            <h2>Content 2</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum qui adipisci.
            </p>
          </div>
  
          <div
            className={this.state.toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2>Content 3</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
}

export default StatusTab;