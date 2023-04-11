import styled from "styled-components";

export const CardpayemntWrap = styled("div")`
  && {
    width: 75%;
    box-shadow: 2px 4px 5px #222;
    margin: 20px auto;
    min-height: 200px;
    padding: 20px;

    background: linear-gradient(
      360deg,
      #484848,
      #3e3e3e,
      #343434,
      #2b2b2b,
      #222222,
      #191919,
      #0f0f0f,
      #000000
    );
    border-radius: 7px;
  }
  .MuiOutlinedInput-input {
    padding: 2px;
    color: #fff;
  }
  .MuiStack-root > .MuiTextField-root {
    min-width: 149px;
  }

  .card-parent {
    position: relative;
  }
  .expiry-cvv {
    margin-top: 60px;
    color: #fff;
  }
  .cardholder-name p {
    color: #fff;
    text-transform: uppercase;
    font-size: 30px;
    margin-top: 20px;
  }
  .expiry-date {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: flex-end;
  }
  .expiry-date input {
    height: 39px;
    width: 86px;
    background: transparent;
    border: none;
    border-bottom: 2px solid #656665;
    color: #fff;
  }
  .card-detail input {
    height: 39px;
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 2px solid #656665;
    color: #fff;
    position: relative;
  }
  .card-detail img {
    right: 5px;
    top: 0px;
    width: 50px;
    position: absolute;
  }
`;
export const SelectWrapper = styled("div")`
  select {
    height: 40px;
    width: 100%;
    margin: 12px 0px;
    border: none;
  }
`;
