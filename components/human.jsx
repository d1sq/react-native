import styled from 'styled-components/native';

const HumanView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const HumanImage = styled.Image`
  height: 70px;
  width: 70px;
  object-fit: cover;
  border-radius: 12px;
  margin-right: 12px;
`;

const HumanTitle = styled.Text`
  color: #242222;
  font-size: 16px;
  font-weight: 700;
`;
const HumanDetails = styled.View`
  color: #242222;
  flex: 1;
  justify-content: center;
`;

const HumanAuthor = styled.Text`
  color: #242222;
  font-size: 12px;
  margin-top: 2px;
`;

export const Human = ({title, status, img}) => {
  return (
    <HumanView>
      <HumanImage
        source={{
          uri: img,
        }}
      />
      <HumanDetails>
        <HumanTitle>{title}</HumanTitle>
        <HumanAuthor>{status}</HumanAuthor>
      </HumanDetails>
    </HumanView>
  );
};
