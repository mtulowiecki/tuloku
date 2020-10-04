import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import Button from 'components/Button/Button';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 6rem 3rem 2rem;
  grid-gap: 2rem;
  place-items: center;
`;

const StyledSvg = styled(motion.svg)`
  height: 6rem;
  width: 6rem;
`;

const Path = styled(motion.path)`
  fill: none;
  stroke: ${({ theme }) => theme.secondary};
  stroke-width: 5;
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
`;

const Loader = ({ errorMessage, onRetry }) => {
  return (
    <Wrapper>
      <AnimatePresence exitBeforeEnter>
        {errorMessage ? (
          <>
            <StyledSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <Path
                key="polygon"
                d="M95 69.5492L70.5492 94H30.4508L6 69.5492V29.4508L30.4508 5H70.5492L95 29.4508V69.5492Z"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: 1,
                  transition: { duration: 2 },
                }}
                exit={{ pathLength: 0 }}
              />
              <Path
                key="exclamation"
                d="M47.5 27.5H52.5V57.5H47.5V27.5ZM47.5 67.5H52.5V72.5H47.5V67.5Z"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 2 } }}
                exit={{ opacity: 0 }}
              />
            </StyledSvg>

            <Paragraph>{errorMessage}</Paragraph>
            <Button name="retry" onTap={onRetry} secondary>
              Retry
            </Button>
          </>
        ) : (
          <StyledSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <Path
              key="loading"
              d="M92.4131 69.0117C89.7022 75.0593 86.7986 79.5435 83.1711 83.1711C79.5435 86.7986 75.0593 89.7022 69.0117 92.4131C62.0805 95.52 55.9888 97 50 97C44.0112 97 37.9195 95.52 30.9883 92.4131C24.9407 89.7022 20.4565 86.7986 16.8289 83.1711C13.2014 79.5435 10.2978 75.0593 7.58692 69.0117C4.48004 62.0805 3 55.9888 3 50C3 44.0112 4.48004 37.9195 7.58692 30.9883C10.2978 24.9407 13.2014 20.4565 16.8289 16.8289C20.4565 13.2014 24.9407 10.2978 30.9883 7.58692C37.9195 4.48004 44.0112 3 50 3C55.9888 3 62.0805 4.48004 69.0117 7.58692C75.0593 10.2978 79.5435 13.2014 83.1711 16.8289C86.7986 20.4565 89.7022 24.9407 92.4131 30.9883C95.52 37.9195 97 44.0112 97 50C97 55.9888 95.52 62.0805 92.4131 69.0117Z"
              initial={false}
              animate={{
                pathLength: [0, 0.5, 1],
                pathOffset: [0, 0.5, 1],
                rotate: [0, 180, 360],
                transition: { loop: Infinity, duration: 2 },
              }}
              exit={{ pathLength: 0, pathOffset: 0, rotate: 0 }}
            />
          </StyledSvg>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

Loader.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  onRetry: PropTypes.func.isRequired,
};

export default Loader;
