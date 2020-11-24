import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { animated } from 'react-spring';
import styled from 'styled-components';
import { RouteContext } from '../../../Router';

const StyledBookPage = styled(animated.div)`
  position: absolute;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 600px;
`;

interface BookPageProps {
  style: any;
  
}

const BookPage = (props: BookPageProps) => {
  const { setRoute } = useContext(RouteContext);

  return (
    
    <StyledBookPage style={props.style}>
      <button onClick={() => setRoute('/done')}>DonePage</button>
    </StyledBookPage>
  )
}

export default BookPage;