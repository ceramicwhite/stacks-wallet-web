import { useWallet } from '@app/common/hooks/use-wallet';
import { Body, Text, Title } from '@app/components/typography';

export function SecretKeyMessage(): JSX.Element {
  const { secretKey } = useWallet();
  const wordCount = (secretKey || '').split(' ').length;

  return (
    <>
      <Title fontWeight={500}>Your Secret Key</Title>
      <Body>
        These {wordCount} words are your Secret Key. They create your account, and you sign in on
        different devices with them. Make sure to save these somewhere safe.{' '}
        <Text display="inline" fontWeight={500}>
          If you lose these words, you lose your account.
        </Text>
      </Body>
    </>
  );
}
