import styled from "styled-components";

export const BasicCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: solid 1px #eee;
  width: 300px;
  height: 80px;
  margin: 10px;
  padding: 5px;
  box-shadow: 5px 5px 4px #ccc;
  background-color: #fdfdfd;

  .flag-container {
    display: flex;
    justify-content: center;
    width: 60px;

    img {
      width: 40px;
    }
  }

  .basic-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 180px;

    .country {
      font-weight: 700;
    }
  }

  .details-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
