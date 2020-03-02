import React from "react";
import { ContentBox } from "storybook-pa"

class ContentLayout extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="layout">
        {data.map(item => (
          <ContentBox src={item.src} tag={item.tag} title={item.title} />
        ))}
      </div>
    );
  }
}

export default ContentLayout;
