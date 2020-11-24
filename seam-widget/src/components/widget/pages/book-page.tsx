import { h } from 'preact';
import { useContext } from 'preact/hooks';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { RouteContext } from '../../../Router';

const StyledDonePage = styled(animated.div)`
  position: absolute;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 540px;
`;

const StyledTopSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  height: 100px;
  width: 100%;

  border-radius: 15px 15px 0px 0px;
  background-color: #060D1C;
`;

const StyledMainText = styled.div`
  color: white;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 32px;

  margin-left: 28px;
`;

const StyledSubText = styled.div`
  color: white;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 16px;

  margin-left: 28px;
  margin-top: 7px;
`;

const StyledBottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 440px;
  width: 100%;
`;

const StyledButton = styled.button`
  width: 110px;
  height: 30px;

  background-color: #4877D5;
  border-radius: 5px;

  color: white;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;

  border: none;
  cursor: pointer;
  margin: 0px 10px;
  padding: 0px;

  &:focus {
    outline: none;
  } 
`;

interface DonePageProps {
  style: any;
}

const DonePage = (props: DonePageProps) => {
  const { setRoute } = useContext(RouteContext);

  return (
    <StyledDonePage style={props.style}>
      <StyledTopSection>
        <StyledMainText>Tutoring</StyledMainText>
        <StyledSubText>What are we both free?</StyledSubText>
      </StyledTopSection>
      <StyledBottomSection>
        <StyledButton onClick={() => setRoute('/appointments')}>Go back</StyledButton>
        <StyledButton onClick={() => setRoute('/done')}>Next</StyledButton>
      </StyledBottomSection>
    </StyledDonePage>
  );
}

export default DonePage;