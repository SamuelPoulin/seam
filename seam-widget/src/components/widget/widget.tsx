import { h } from 'preact';
import { useContext, useState } from 'preact/hooks';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { GlobalsContext } from '../../AppContext';
import { RouteContext } from '../../Router';
import { delay } from '../shared/utils';

import WidgetButton from './widget-button';
import WidgetContent from './widget-content';

const StyledWidgetContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.onBackground};
  border-radius: 15px;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.25);

  position: fixed;
  bottom: 40px;
  right: 60px;
`;

const Widget = () => {
  const { widgetOpen } = useContext(GlobalsContext);
  const { route } = useContext(RouteContext);

  const [firstRun, setFirstRun] = useState(true);

  const props = useSpring({
    from: {
      transform: firstRun ? 'translateY(400%)' : '',
      width: '150px',
      height: '60px'
    },
    to: async (next: any) => {
      if (firstRun) {
        await delay(2000);
      }

      await next({ 
        transform: firstRun ? 'translateY(0%)' : '',         
        width: widgetOpen ? '300px' : '150px', 
        height: widgetOpen ? route === '/book' ? '600px' : '400px' : '60px' 
      });

      setFirstRun(false);
    },
  });


  return (
    <StyledWidgetContainer style={props}>
      <WidgetContent />
      <WidgetButton />
    </StyledWidgetContainer>
  );
};

export default Widget;
