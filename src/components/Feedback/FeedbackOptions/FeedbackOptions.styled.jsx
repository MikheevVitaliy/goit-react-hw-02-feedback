import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const BtnItem = styled.li``;

export const Button = styled.button`
  padding: 0.9em 1.6em;
  border: none;
  outline: none;
  color: #fff;
  font-family: inherit;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 15px;

  ::after {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(65, 65, 65);
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  ::before {
    content: '';

    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 600%;н
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(8px);
    animation: glowing 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
    opacity: 0;
  }

  @keyframes bounce {
	0%, 20%, 60%, 100% {
		transform: translateY(0);
		transform: translateY(0);
	}

	40% {
		transform: translateY(-20px);
		transform: translateY(-20px);
	}

	80% {
		transform: translateY(-10px);
		transform: translateY(-10px);
	}
}

  :hover:after {
    animation: bounce 1s;
  }

  :active:after {
    background: green;
  }

  :active {
    color: #000;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 400% 0;
    }

    100% {
      background-position: 0 0;
    }
  }
`;
