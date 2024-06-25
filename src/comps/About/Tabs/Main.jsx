/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '../../Container'
import { navLinks } from '../../../config/navLinks';
import { colors } from '../../../config/colors';
import { Title, Title2 } from '../../Title';
import TabsContainer from './TabsContainer';
import TabButton from './TabButton';
import TabImage from './TabImage';
import TabContent from './TabContent';
import { ContentDetails, ContentImage, ContentText } from './Content';
import TagsContainer from './TagsContainer';
import TagLink from './TagLink';
import { motion } from 'framer-motion';

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Container>
      <TabsContainer>
        {tabs.map(({ value, icon }, i) => {
          const tabData = navLinks.find(arc => '/' + value === arc.path);
          return (
            <TabButton key={i} color={colors[value]} $active={i === activeTab} onClick={() => setActiveTab(i)}>
              <TabImage src={icon} alt={tabData.title} $color={colors[value]}  />
              <div>{tabData.title}</div>
            </TabButton>
          )
        })}
      </TabsContainer>
      {tabs.map(({ value, text, img, icon }, i) => {
        const tabData = navLinks.find(arc => '/' + value === arc.path);
        return (
          i === activeTab && <TabContent key={i} $active={i === activeTab}>
            <ContentImage
              src={img}
              alt={tabData.title}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }} />
            <ContentDetails
              initial={{ opacity: 0, x: 200, scale: 0.5, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ ease: "easeOut", duration: 0.5 }}>
              <TabButton color={colors[value]} $active={i === activeTab} onClick={() => setActiveTab(i)} id='title'>
                <TabImage src={icon} alt={tabData.title} />
                <Title2 $color={colors[value]}>{tabData.title}</Title2>
              </TabButton>
              <ContentText>{text}</ContentText>
              <TagsContainer>
                {tabData.dropdown.map((tag, i) => (
                  <motion.span
                    initial={{ opacity: 0, y: 100, scale: 0.5, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 + 0.125 * i }}>
                    <TagLink to={tag.path} key={i} color={colors[value]} >
                      {tag.title}
                    </TagLink>
                  </motion.span>
                ))}
              </TagsContainer>
            </ContentDetails>
          </TabContent>
        )
      })}
    </Container>
  )
}
