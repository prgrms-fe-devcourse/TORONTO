import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import FormField from '@/components/molecules/FormField';
import useForm from '@/hooks/useForm';
import { requestApi } from '@/api';

const CardForm = styled.form`
  padding: 7% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  position: absolute;
`;

const LoginForm = () => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: async (values) => {
      const res = await requestApi('/login', {
        method: 'POST',
        data: {
          email: values.email,
          password: values.password,
        },
      });
      if (res) alert('로그인 되었습니다.');
      else alert('로그인 실패하셨습니다.');
    },
    validate: ({ email, password }) => {
      const newErrors = {};
      if (!email) newErrors.email = '이메일을 입력하세요';
      if (!/^.+@.+\..+$/.test(email))
        newErrors.email = '올바른 이메일을 입력해주세요.';
      if (!password) newErrors.password = '비밀번호를 입력하세요';
      return newErrors;
    },
  });

  return (
    <CardForm onSubmit={handleSubmit}>
      <Text strong style={{ marginBottom: '32px' }}>
        로그인
      </Text>
      <FormField
        textTitle='이메일'
        inputType='email'
        inputPlaceholder='email'
        inputName='email'
        inputOnChange={handleChange}
        textError={errors.email}
      />
      <FormField
        textTitle='비밀번호'
        inputType='password'
        inputPlaceholder='password'
        inputName='password'
        inputOnChange={handleChange}
        textError={errors.password}
      />
      <Button disabled={isLoading} style={{ marginTop: '32px' }}>
        로그인
      </Button>
    </CardForm>
  );
};

export default LoginForm;