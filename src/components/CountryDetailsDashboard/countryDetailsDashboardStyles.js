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

  .country-title {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    h2 {
      justify-self: center;
    }
  }

  .img-container {
    width: 200px;
    box-shadow: 0px 0px 10px #ccc;
    margin: 0 0 15px 0;
  }

  .form-container {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .domain-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  }

  .info-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
`;

export const CountryDetailsFormContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;

  button {
    margin: 0 0 10px 0;
  }
`;
