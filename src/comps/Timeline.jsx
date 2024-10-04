import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../wrappers/Provider';
import Form from './ContactForm/Main';
import { colors } from '../config/colors';
import { Container as C } from './Container';

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding-top: 3rem;
  margin-top: -3rem;
  font-size: 20px;
  
	--thickness: 3px;
	--page-color: ${({ $color }) => $color};
	--box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  &::after {
    content: '';
    position: absolute;
    width: var(--thickness);
    top: 0;
    bottom: ${({ $x }) => $x}px;
    left: 50%;
    background-color: var(--page-color);

    @media screen and (max-width: 600px) {
      left: 0;
      margin-left: calc(1px + (10 * var(--thickness)));
    }
  }
`;

const Container = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;

  &.left {
    left: 0;
  }

  &.right {
    left: 50%;

    &::after {
      left: -10px;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    margin-top: 0 !important;

    &::before {
      left: 60px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }

    &.left::after,
    &.right::after {
      left: 20px;
    }

    &.right {
      left: 0%;
    }
  }
`;

const Content = styled.div`
  padding: 20px 30px;
  position: relative;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  gap: 2rem;
  text-align: center;
`;

const Hr = styled.div`
  position: absolute;
  width: calc(100% + 0px);
  top: calc(50%);
  height: var(--thickness);

  &.left {
    left: 70px;
  }

  &.right {
    left: -70px;
  }

  @media screen and (max-width: 600px) {
    right: 0 !important;
    width: calc(100% + 0px);

    &.left {
      left: -70px !important;
    }

    &.right {
      left: 70px;
    }
  }
`;

const HrInner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--page-color);
`;

const Ligacao = styled.div`
  height: calc(var(--thickness) * 4);
  aspect-ratio: 1;
  width: fit-content;
  position: absolute;
  border-radius: 999px;
  background-color: var(--page-color);

  &.left {
    margin-right: calc(-2.5 * var(--thickness));
    right: 0;
  }

  &.right {
    margin-left: calc(1px + (-1.5 * var(--thickness)));
    left: 0;
  }

  @media screen and (max-width: 600px) {
    left: 0;
    margin-left: calc(1px + (-1.5 * var(--thickness)));
  }
`;

const Img = styled.img`
  --background-color: white;
  border-radius: 50%;
  width: 75%;
  --box-shadow: var(--box-shadow);
  z-index: 1;
  justify-self: center;
`;

const Text = styled.div`
  color: #6b7280;
`;

const Button = styled.button`
  background: ${({ color }) => color};
  padding: 1rem;
  box-shadow: var(--box-shadow);
  border-radius: 9999px;
  color: white;
  border: none;
  font-size: 20px;
`;

export const Timeline = ({ color = '#000', list }) => {
  const { modal } = useContext(AppContext);
  const timeline = useRef(null);
  const location = useLocation();
  const [x, setX] = useState(0);

  useEffect(() => {
    const hr = function () {
      const whole = timeline.current?.getBoundingClientRect();
      const last = [...(timeline?.current ?? document).querySelectorAll('#ligacao')].pop()?.getBoundingClientRect();
      setX(whole?.bottom - last?.bottom);
    };
    hr();
    document.onreadystatechange = function () {
      if (document.readyState === 'complete') {
        hr();
        window.scroll(0, 0);
      }
    };
    window.addEventListener('load', hr);
    window.addEventListener('scroll', hr);
    window.addEventListener('resize', hr);
  }, [location.hash, timeline, x]);

 	return (
    	<TimelineContainer ref={timeline} $x={x} $color={color}>
      {list.map(([ title, image, id, text, button ], i) => {
        let leftOrRight = i % 2 === 0 ? 'left' : 'right';
        if (document.querySelector('body')?.getBoundingClientRect().width <= 600) leftOrRight = 'left';
        let mt = -(timeline.current?.querySelector('#' + id)?.getBoundingClientRect().height / 2.25);
        if (isNaN(mt)) mt = 0;
        return (
          <Container id={id} className={leftOrRight} key={i} style={{ marginTop: i === 0 ? 0 : mt }}>
            <Content>
              <div style={{ position: 'relative', display: 'grid' }}>
                <Hr className={leftOrRight}>
                  <HrInner>
                    <Ligacao id={"ligacao"} className={leftOrRight} />
                  </HrInner>
                </Hr>
                <Img src={image} alt="" />
              </div>
              <Text>{text}</Text>
              <Button color={color} onClick={() => {console.log(list); modal?.open(
                    <Form
                    formType="Modal"
                    motionCond={false}
                    color={colors.default}
                    options={{ category : list.map(([title]) => title), }}
                    selected={{ category : i, }} />
                )
              }}>{button}</Button>
            </Content>
          </Container>
        );
      })}
    	</TimelineContainer>
	);
};