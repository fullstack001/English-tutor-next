import * as React from 'react';
import cx from 'classnames';
import styled from 'styled-components';

import { useAppState } from './Context';

import ABA from './images/result-badge-aba.png';
import BBA from './images/result-badge-bba.png';
import KBA from './images/result-badge-kba.png';
import Button from './Button';
import appConfig from '../config';
import { submitResult } from '../helpers/submitResult';
// import { scrollToElement } from '../helpers/scrollToElement';

const images = {
  ABA,
  BBA,
  KBA,
};

const EmailStepWrapper = styled.div`
  width: 100%;
  form {
    display: block;
    width: 100%;
    padding-bottom: 50px;

    input {
      width: 100%;
      margin-bottom: 10px;
      background: #fff;
      color: #9b9b9b;
      letter-spacing: 0;
      font-weight: 400;
      padding: 12px 20px;
      box-sizing: border-box;
      border-radius: 0;
      transition: all 0.3s;
      border: 1px solid ${appConfig.theme.primaryColor};
      height: 51px;
      border-bottom: 1px solid ${appConfig.theme.primaryColor};
      box-shadow: 0 1px 0 0 ${appConfig.theme.primaryColor};
      font-size: 18px;

      @media screen and (min-width: 992px) {
        margin-bottom: 17px;
      }
    }

    .Button {
      max-width: 400px;
      line-height: 2;
      margin: auto;
      font-size: 18px;
    }
  }
`;

const ResultBadge = styled.div`
  display: block;
  width: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 110px;
  box-sizing: border-box;
  @media screen and (min-width: 992px) {
    height: 155px;
    margin-bottom: 10px;
  }
`;

const Text = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 6px;
  color: ${appConfig.theme.primaryColor};
  font-size: 16px;
  text-align: center;
  line-height: 1.1;

  @media screen and (min-width: 992px) {
    line-height: 1.4;
    font-size: 19px;
    margin-bottom: 14px;
  }
`;

const PrivacyText = styled.div.attrs({ className: 'EmailStep_PrivacyText' })`
  font-size: 13px;
  color: #b8b8b8;
  display: block;
  margin-top: 6px;
  width: 100%;
  text-align: center;
  line-height: 1;
`;

export const EmailStep = () => {
  const [state] = useAppState();
  const [email, setEmail] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const { winnerProfile, currentQuestionData } = state;

  const { emailCTAText, emailCTASubText, buttonLabel } =
    currentQuestionData.customComponentProps;

  function onSubmit(ev) {
    ev.preventDefault();
    if (!isValid) return;
    setLoading(true);

    submitResult(email, state)
      .then(async function (res) {
        setLoading(false);

        const { success } = await res.json();
        if (success) {
          window.location.href = state.redirectionUrl;

          if (window.parent) {
            window.parent.postMessage('quizResult' + state.redirectionUrl, '*');
          }
        }
      })
      .catch(function (err) {
        setLoading(false);
        console.error(err);
        alert('failed to send');
      });
  }

  // React.useEffect(() => {
  //   scrollToElement('input[type="email"]');
  // }, []);

  return (
    <EmailStepWrapper className={'ui-flex EmailStep EmailStep_Wrapper'}>
      <ResultBadge
        style={{ backgroundImage: `url(${images[winnerProfile]})` }}
      />

      <Text>{emailCTAText}</Text>

      <form onSubmit={onSubmit}>
        <input
          type={'email'}
          placeholder={'EMAIL'}
          onChange={function (event) {
            event.preventDefault();
            const value = event.target.value.trim();
            setEmail(value);
            setIsValid(validateEmail(value));
          }}
        />

        <Button
          className={cx({ loading }, 'submit-button')}
          onClick={onSubmit}
          disabled={!isValid || loading}
        >
          {buttonLabel}
        </Button>

        <PrivacyText>{emailCTASubText}</PrivacyText>
      </form>
    </EmailStepWrapper>
  );
};

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default EmailStep;
