// import { getRandomMessage } from 'src/utils/normalizers';
import { getProvider, preContractRequest } from './ultilities';

const useAccount = () => {
  const signMessage = async (message: string) => {
    const provider = await getProvider();
    await provider.send('eth_requestAccounts');
    const signer = await provider.getSigner();

    const signature = await signer.signMessage(message);
    return {
      signature,
    };
  };

  return {
    signMessage: async (message: string) =>
      await preContractRequest(signMessage, message),
  };
};

export default useAccount;
