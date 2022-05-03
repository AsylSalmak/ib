import React, { useState } from 'react';
import {
  Form,
  Button,
  Dropdown,
  Checkbox,
  Input,
  Message,
} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import '../components/Payments.css';
import axios from 'axios';
import { SET_ACCOUNTS } from '../../../../accounts/reducer/AccountsReducer';
import { formatToCurrencyNumber } from '../../../../helpers/numbers';
import NumberFormat from 'react-number-format';
import { API_URL } from '../../../../config';

const PaymentForm = props => {
  const dispatch = useDispatch();
  const { accounts } = useSelector(store => store.accounts);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [paymentTo, setPaymentTo] = useState('');
  const [amount, setAmount] = useState('');
  const [template, setTemplate] = useState('');

  const [isTemplate, setIsTemplate] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  console.log(loader);
  let options = Object.keys(accounts).map(accId => {
    const account = accounts[accId];
    return {
      key: accId,
      type: account.type,
      text: `${account.account} (${formatToCurrencyNumber(account.balance)} ${
        account.currencyCode
      })`,
      value: accId,
    };
  });

  options = options.filter(el => {
    return el.type != 'currency';
  });

  return (
    <div className='PaymentsForm'>
      <Form>
        <Form.Field>
          <label>Выберите счет</label>
          <Dropdown
            placeholder='Выберите счет'
            value={selectedAccount}
            onChange={(e, data) => {
              setSelectedAccount(data.value);
            }}
            options={options}
            selection
          />
        </Form.Field>
        {props.serviceId === '111' ? (
          <Form.Field>
            <label>Введите номер телефона</label>
            <NumberFormat
              value={paymentTo}
              style={{ width: '100%' }}
              placeholder='номер телефона'
              onValueChange={val => {
                setPaymentTo(val.value);
              }}
              format='+7 (7##) ### ## ##'
            />
          </Form.Field>
        ) : (
          <Form.Field>
            <label>Лицевой счет</label>
            <NumberFormat
              value={paymentTo}
              style={{ width: '100%' }}
              placeholder='Лицевой счет'
              onValueChange={val => {
                setPaymentTo(val.value);
              }}
              format='Лицевой счет: #### #### ##'
            />
          </Form.Field>
        )}
        <Form.Field>
          <label>Введите сумму</label>
          <NumberFormat
            onValueChange={val => {
              setAmount(val.value);
            }}
            value={amount}
            placeholder='Сумма'
            customInput={Input}
            format={
              amount.toString().length === 2
                ? `## # KZT`
                : amount.toString().length === 3
                ? `# ### KZT`
                : amount.toString().length === 4
                ? `# #### KZT`
                : amount.toString().length === 5
                ? `## #### KZT`
                : amount.toString().length === 6
                ? `### ### # KZT`
                : amount.toString().length === 7
                ? `# ### #### KZT`
                : amount.toString().length === 8
                ? `## ### ### KZT`
                : amount.toString().length === 9
                ? `### ### ### KZT`
                : `## KZT`
            }
          />
          <Checkbox
            checked={isTemplate}
            onChange={e => {
              setIsTemplate(!isTemplate);
              setTemplate('');
            }}
            label='Сохранить как шаблон'
            style={{ margin: '20px 0' }}
          />
          {isTemplate && (
            <div>
              <label>Введите наименование шаблона</label>
              <Input
                value={template}
                onChange={e => {
                  setTemplate(e.target.value);
                }}
                placeholder='Введите наименование шаблона'
              />
            </div>
          )}
        </Form.Field>

        <Button
          color='blue'
          loading={loader}
          disabled={
            !(
              !loader &&
              selectedAccount &&
              paymentTo &&
              amount &&
              (isTemplate ? template : true)
            )
          }
          onClick={() => {
            const balance = +accounts[selectedAccount].balance;
            if (balance < 0 || balance < +amount) {
              setError('Недостаточно средств');
              return;
            }
            setError(false);
            setLoader(true);
            axios({
              method: 'post',
              url: 'payments/proceed',
              baseURL: API_URL,
              data: {
                amount: amount,
                paymentTo: paymentTo,
                account: selectedAccount,
                serviceId: props.serviceId,
                providerId: props.providerId,
                template: template,
              },
            })
              .then(response => {
                setSuccess(true);
                setLoader(false);
                axios({
                  method: 'get',
                  url: 'accounts',
                  baseURL: API_URL,
                }).then(response => {
                  const accounts = response.data.reduce(
                    (previousValue, currentValue) => {
                      return {
                        ...previousValue,
                        [currentValue.id]: currentValue,
                      };
                    },
                    {}
                  );
                  setTimeout(() => {
                    props.setServiceId('');
                  }, 1000);
                  dispatch({
                    type: SET_ACCOUNTS,
                    payload: accounts,
                  });
                });
              })
              .catch(function (error) {
                if (error.response) {
                  setError(error.response.data.message);
                }
              });
          }}
          type='submit'
        >
          Оплатить
        </Button>
        {error ? (
          <Message negative size='tiny'>
            <Message.Header>{error}</Message.Header>
          </Message>
        ) : null}
        {success ? (
          <Message positive size='tiny'>
            <Message.Header>Оплата прошла успешно</Message.Header>
          </Message>
        ) : null}
      </Form>
    </div>
  );
};
export default PaymentForm;
