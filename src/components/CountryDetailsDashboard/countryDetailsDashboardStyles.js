import styled from "styled-components";

export const CountryDetailsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .details-card {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img-container {
    width: 200px;
    box-shadow: 0px 0px 10px #ccc;
  }

  .form-container {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

  }

  .domain-container {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
  }
`;
