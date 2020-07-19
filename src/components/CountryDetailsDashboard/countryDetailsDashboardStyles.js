import styled from "styled-components";

export const CountryDetailsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .area-organizer{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .details-card {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img-container {
    width: 200px;
    box-shadow: 0px 0px 10px #ccc;
    margin: 0 0 30px 0;
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

  .map-distance {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .country-distance{
    margin: 0 0 0 30px;
    width: 200px;
    display: flex;
    justify-content: space-between;
  }


`;
