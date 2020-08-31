import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = styled(motion.button)`
  display: block;
  padding: 0.5rem;
  width: 10rem;
  height: 2rem;
  border-radius: 1.25rem;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 100%;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.secondary15};
  color: ${({ theme }) => theme.secondary};
  border: none;
  cursor: pointer;
`;

export default Button;
