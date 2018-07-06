// @flow
import * as React from 'react';
import { render } from 'react-dom';

type Props = {
  appName: string
};

const App = ({ appName }: Props) => <div>{appName} works</div>;

const element: HTMLElement | null =  document.getElementById('app-target');

if (!element) {
  throw new Error("couldn't find element with id 'app-target'");
}

render(<App appName="Poem Nubs" />, element);
