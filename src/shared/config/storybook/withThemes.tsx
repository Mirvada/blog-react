import { Decorator } from '@storybook/react-webpack5';
import 'app/styles/index.scss';

export const withThemes: Decorator = (StoryFn, context) => {
  return (
    <div className={`app ${context.globals.theme}`}>
      <StoryFn />
    </div>
  );
};
