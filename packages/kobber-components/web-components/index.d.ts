import { ExampleProps, ProgressBarProps as Props, ProficiencyBarProps as Props$1 } from '../react/index.js';
import 'react';

declare const Example: new (...params: any[]) => HTMLElement & ExampleProps;

declare const ProgressBar: new (...params: any[]) => HTMLElement & Props;
declare const ProficiencyBar: new (...params: any[]) => HTMLElement & Props$1;

export { Example, ProficiencyBar, ProgressBar };
