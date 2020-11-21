import { Fragment, h } from 'preact';
import { useContext } from 'preact/hooks';
import { useTransition } from 'react-spring';
import styled from 'styled-components';
import { RouteContext } from '../../Router';
import BookPage from './pages/book-page';
import DonePage from './pages/done-page';

const StyledContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

const WidgetContent = () => {
  const { route } = useContext(RouteContext);

  const transitions = useTransition(route, route => route, {
    from: { transform: 'translate3d(100%,0,0)' },
    enter: { transform: 'translate3d(0%,0,0)' },
    leave: { transform: 'translate3d(100%, 0, 0)' },
  });

  function getPage(route: string, props: any, key: any) {
    switch (route) {
      case '/book':
        return <BookPage style={props} key={key} />;
      case '/done':
        return <DonePage style={props} key={key} />;
    }

    return <Fragment />;
  }

  return (
    <StyledContentContainer>
      {transitions.map(({ item: route, props, key }) => getPage(route, props, key))}
    </StyledContentContainer>
  );
}

export default WidgetContent;