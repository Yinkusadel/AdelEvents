
import { AuthForm } from '@/app/components/auth-form';
import { SignupForm } from '@/app/features/auth/sign-up/signup-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create a new account',
};

export default function SignupPage() {
  return (
    <AuthForm
      title="Create an Account"
      description="Enter your details to create a new account"
    >
      <SignupForm />
    </AuthForm>
  );
}