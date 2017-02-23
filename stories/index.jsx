import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import WikiEditor from '../src/WikiEditor';
import WikiEditorAce from '../src/WikiEditorAce';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('VS', module)
  .add('real app', () => <WikiEditor defaultValue={''} />)
;

storiesOf('Ace', module)
  .add('no sync', () => <WikiEditorAce defaultValue={''} />)
  .add('sync in room1', () => <WikiEditorAce defaultValue={'syncing with room1'} roomName="room1" />)
  .add('sync in room2', () => <WikiEditorAce defaultValue={'syncing with room2'} roomName="room2" />)
;
