import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { withTheme, css } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import {
  toggleSetting as toggleSettingAction,
  restart as restartAction,
} from 'actions/rootActions';

import RestartModal from 'components/RestartModal/RestartModal';
import Button from 'components/Button/Button';

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ isBlured }) =>
    isBlured &&
    css`
      filter: blur(4px);
    `}
`;

const Header = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 1rem;
`;

const Paragraph = styled.p`
  font-size: 0.8rem;
  margin: 1rem 0;
`;

const Circle = styled(motion.div)`
  height: 4rem;
  width: 4rem;
  margin-bottom: 2rem;
  border-radius: 50%;
  line-height: 4rem;
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-top: 3rem;
`;

const Times = ({
  settings: { remainingDigits, higlightCell },
  toggleSetting,
  restart,
  theme,
}) => {
  const circleControls = useAnimation();
  const [restartModal, setRestartModal] = useState(false);

  useEffect(() => {
    circleControls.start((custom) =>
      custom
        ? {
            backgroundColor: theme.secondary,
            color: theme.primary,
          }
        : {
            backgroundColor: theme.secondary15,
            color: theme.secondary,
          }
    );

    return () => circleControls.stop();
  }, [theme, circleControls, remainingDigits, higlightCell]);

  return (
    <>
      <RestartModal
        isVisible={restartModal}
        handleHide={() => setRestartModal(false)}
        restart={restart}
      />
      <Wrapper isBlured={restartModal}>
        <Header>Settings</Header>
        <Paragraph>Show remaining digit count</Paragraph>
        <Circle
          custom={remainingDigits}
          animate={circleControls}
          onTap={() => toggleSetting('remainingDigits')}
        >
          {remainingDigits ? 'ON' : 'OFF'}
        </Circle>
        <Paragraph>Higlight same digits</Paragraph>
        <Circle
          custom={higlightCell}
          animate={circleControls}
          onTap={() => toggleSetting('higlightCell')}
        >
          {higlightCell ? 'ON' : 'OFF'}
        </Circle>
        <StyledButton
          name="restart"
          onTap={() => setRestartModal(true)}
          secondary
        >
          restart game
        </StyledButton>
      </Wrapper>
    </>
  );
};

Times.propTypes = {
  settings: PropTypes.objectOf(PropTypes.bool).isRequired,
  toggleSetting: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ root: { settings } }) => ({
  settings,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSetting: (setting) => dispatch(toggleSettingAction(setting)),
  restart: () => dispatch(restartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Times));
