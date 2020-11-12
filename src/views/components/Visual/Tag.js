import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";
import {Color} from "../../../common/Color/Color.Styled";

function Tag (props) {

    const {
    } = props;

    const tagList = ['flower', 'wallpapers', 'backgrounds', 'happy', 'love'];


    return (
        <Container>
                <h4>Trending:</h4>
                <TagList>
                    {
                        tagList.map((item, index) =>
                        <TagName key={index}>{item}
                        <span>,</span>
                        </TagName>)
                    }
                </TagList>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-start;
  margin-top: ${pxToRem(15)};
  h4 {
      color: #fff;
      font-size: ${pxToRem(14)};
      font-weight: 400;
      line-height: 1.4;
  }
`
const TagList = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;
const TagName = styled.div`
    color: rgba(255,255,255,.8);
    font-size: ${pxToRem(15)};
    font-weight: 400;
    margin-left: 3px;
`;
export default Tag;