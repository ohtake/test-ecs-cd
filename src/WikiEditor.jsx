import React from 'react';
import MonacoEditor from 'react-monaco-editor/lib';

import WikiParser from './WikiParser';
import monacoRequireConfig from './monacoRequireConfig';

const defaultValue = `# Apps
`;

export default class WikiEditor extends React.Component {
  constructor(props) {
    super();
    this.state = { text: props.defaultValue, hast: WikiParser.parseToHast(props.defaultValue) };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleAppEdit = this.handleAppEdit.bind(this);
  }
  handleEdit(text) {
    const hastOriginal = WikiParser.parseToHast(text);
    const hast = hastOriginal;
    this.setState({ text, hast });
  }
  handleAppEdit(newText /* , appContext */) {
    const text = newText;
    const hastOriginal = WikiParser.parseToHast(text);
    const hast = hastOriginal;
    this.setState({ text, hast });
  }
  render() {
    return (<div>
      <div style={{ display: 'flex' }}>
        <MonacoEditor onChange={this.handleEdit} language="markdown" value={this.state.text} width="33%" height={500} requireConfig={monacoRequireConfig} />
        {WikiParser.renderCustomHast(this.state.hast)}
      </div>
    </div>);
  }
}
WikiEditor.propTypes = {
  defaultValue: React.PropTypes.string,
};
WikiEditor.defaultProps = {
  defaultValue,
};
